import { Rates } from '~api/models/currencies';
import Currency from '~db/models/Currencies';

export const getExchangeRates = async (): Promise<Currency[]> => {
  const rates = await Currency.findAll({
    attributes: ['code', 'rate', 'updatedAt'],
  });

  return rates;
};

export const updateRatesDB = async (rates: Rates): Promise<void> => {
  for(const code in rates) {
    await Currency.update({ rate: rates[code] }, { where: { code } });
  }
  return ;
};
