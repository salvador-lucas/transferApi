import { Op } from 'sequelize';
import Account from '~db/models/Accounts';
import Transfer from '~db/models/Transfers';

export const checkAccounts = async (accountFrom: number, accountTo: number): Promise<Account[]> => {
  console.info('start find account from database');
  const usersAccounts = await Account.findAll({ where: { id: { [Op.or]: [accountFrom, accountTo] } } });
  console.info('start find account from database');
  return usersAccounts;
};

export const storeTransfer = async (transfer: Transfer): Promise<void> => {
  console.info('saving transfer in database');
  await Transfer.create(transfer);
  console.info('finished saving transfer in database');
  return;
};
