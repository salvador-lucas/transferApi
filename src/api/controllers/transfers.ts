import { NextFunction, Request, Response } from 'express';
import { createTransfer } from '~api/services/transfer';
import { STATUS_CODES } from '~constants';

export const handleCreateTransfer = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    await createTransfer(req.body);
    return res.status(STATUS_CODES.CREATED).send();
  } catch (error) {
    return next(error);
  }
};
