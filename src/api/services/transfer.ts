import { getExchangeRates } from '~api/repositories/currencies';
import { checkAccounts, storeTransfer } from '~api/repositories/transfers';
import { databaseErrorHandler } from '~db/error_handler';
import Transfer from '~db/models/Transfers';
import { getExchangeRatesFromProvider } from './currencies';
import { accountInfoNotFoundError, invalidAccountIdsError, noAVailableFoundsError } from '~api/errors/transfers';
import { checkAccountFounds, updatesAvailableFounds } from '~api/repositories/accounts';
import moment from 'moment';
// import { Rates } from '~api/models/currencies';

export const createTransfer = async (transfer: Transfer): Promise<void> => {
  const existingAccounts = await checkAccounts(transfer.accountFrom, transfer.accountTo).catch(databaseErrorHandler);
  if ( (transfer.accountFrom != transfer.accountTo && existingAccounts.length != 2) ||
        (transfer.accountFrom == transfer.accountTo && existingAccounts.length < 1)) {
    throw invalidAccountIdsError();
  }

  const senderCurrencyCode = existingAccounts.find(ac => ac.id === transfer.accountFrom);
  const receiverCurrencyCode = existingAccounts.find(ac => ac.id === transfer.accountTo);

  const DBrates = await getExchangeRates().catch(databaseErrorHandler);
  let senderRate: number | undefined, receiverRate: number | undefined;
  //en caso de no tener el rate actualizado dentro de un rango de 2 horas (valor arbitrario, podría ser con mayor o menor frecuencia), se obtinenen los rates de la api externa
  senderRate = DBrates.find(r =>
    r.code == senderCurrencyCode?.currencyCode && r.updatedAt > moment().subtract(2, 'hours').toDate()
  )?.rate;
  receiverRate = DBrates.find(r =>
    r.code == receiverCurrencyCode?.currencyCode && r.updatedAt > moment().subtract(2, 'hours').toDate()
  )?.rate;

  if (!senderRate || !receiverRate){
    const rates = await getExchangeRatesFromProvider();
    senderRate = rates[senderCurrencyCode?.currencyCode || ''];
    receiverRate = rates[receiverCurrencyCode?.currencyCode || ''];
  }

  //chequear el saldo y restarlo
  const availableBalanceSender = await checkAccountFounds(transfer.accountFrom).catch(databaseErrorHandler);
  const availableBalanceReceiver = await checkAccountFounds(transfer.accountTo).catch(databaseErrorHandler);

  if(!availableBalanceReceiver || !availableBalanceSender){
    throw accountInfoNotFoundError();
  }

  if(transfer.amount > availableBalanceSender){
    throw noAVailableFoundsError();
  }

  await storeTransfer(transfer).catch(databaseErrorHandler);

  //una transferencia hacia una misma cuenta daría como resultado el mismo saldo actual, por lo que no es necesario actualizarlo
  if(transfer.accountFrom != transfer.accountTo) {
    // restar el saldo a la cuenta emisora
    await updatesAvailableFounds(transfer.accountFrom, availableBalanceSender - transfer.amount).catch(databaseErrorHandler);

    //recibir el saldo en la cuenta receptora
    const convertedAmount = (transfer.amount * senderRate ) / receiverRate;
    await updatesAvailableFounds(transfer.accountTo, availableBalanceReceiver + convertedAmount).catch(databaseErrorHandler);
  }
};