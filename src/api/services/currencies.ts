import axios from 'axios';
import { serviceUnavailableError } from '~api/errors';
import { Rates } from '~api/models/currencies';
import { updateRatesDB } from '~api/repositories/currencies';
import { databaseErrorHandler } from '~db/error_handler';

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

    await updateRatesDB(rates).catch(databaseErrorHandler);

    return rates;
  } catch (e) {
    console.error(e);
    throw serviceUnavailableError();
  }
};
