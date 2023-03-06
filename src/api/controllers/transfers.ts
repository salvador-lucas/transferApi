import { NextFunction, Request, Response } from 'express';
import { createTransfer, getTransfers } from '~api/services/transfer';
import { STATUS_CODES } from '~constants';

export const handleCreateTransfer = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    await createTransfer(req.body);
    return res.status(STATUS_CODES.CREATED).send();
  } catch (error) {
    return next(error);
  }
};

export const handleGetTransfer = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    const transfers = await getTransfers(req.query);
    return res.status(STATUS_CODES.OK).send(transfers);
  } catch (error) {
    return next(error);
  }
};
