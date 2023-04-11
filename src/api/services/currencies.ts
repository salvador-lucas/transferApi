import axios from 'axios';
import { serviceUnavailableError } from '~api/errors';
import { Rates } from '~api/models/currencies';
import { getExchangeRates, createOrUpdateRatesDB } from '~api/repositories/currencies';
import { databaseErrorHandler } from '~db/error_handler';
import Currency from '~db/models/Currencies';

export const getExchangeRatesFromProvider = async (): Promise<Rates> => {
  try {
    const res = await axios.get(
      'https://api.apilayer.com/fixer/latest?base=USD&symbols=EUR,GBP,UYU,ARS,USD',
      {
        headers: {
          'apikey': process.env.FIXER_API_KEY
        }
      }
    );
    // convertir los rates todos a base usd
    const rates = res?.data?.rates;
    for(const i in rates) {
      rates[i] = 1 / rates[i];
    }

    await createOrUpdateRatesDB(rates).catch(databaseErrorHandler);

    return rates;
  } catch (e) {
    console.error(e);
    throw serviceUnavailableError();
  }
};

export const getCurrencies = async(): Promise<Currency[]> => {
  return await getExchangeRates();
};
