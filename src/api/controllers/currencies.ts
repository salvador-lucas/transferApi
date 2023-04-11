import { Request, Response } from 'express';
import { getCurrencies } from '~api/services/currencies';
import { STATUS_CODES } from '~constants';

export const handleGetCurrencies = async (req: Request, res: Response): Promise<void> => {
  const currencies = await getCurrencies();
  res.status(STATUS_CODES.OK).send(currencies);
};
