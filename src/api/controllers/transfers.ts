import { Request, Response } from 'express';
import { createTransfer, getTransfers } from '~api/services/transfer';
import { STATUS_CODES } from '~constants';

export const handleCreateTransfer = async (req: Request, res: Response): Promise<void> => {
  await createTransfer(req.body);
  res.status(STATUS_CODES.CREATED).send();
};

export const handleGetTransfer = async (req: Request, res: Response): Promise<void> => {
  const transfers = await getTransfers(req.query);
  res.status(STATUS_CODES.OK).send(transfers);
};
