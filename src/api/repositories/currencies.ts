import { Rates } from '~api/models/currencies';
import Currency from '~db/models/Currencies';

export const getExchangeRates = async (): Promise<Currency[]> => {
  const rates = await Currency.findAll({
    attributes: ['code', 'rate', 'updatedAt'],
  });

  return rates;
};

export const createOrUpdateRatesDB = async (rates: Rates): Promise<void> => {
  for(const code in rates) {
    // await Currency.update({ rate: rates[code] }, { where: { code } });
    await Currency.upsert({ rate: rates[code], code });
  }
  return ;
};

export const getExchangeRateByCode = async (code: string): Promise<Currency | null> => {
  const rate = await Currency.findOne({
    where: {
      code
    },
    attributes: ['code', 'rate', 'updatedAt'],
  });

  return rate;
};
