import { Request, Response } from 'express';
import { TransferReport } from '~api/models/transfers';
import { createTransfer, getTransfers } from '~api/services/transfer';

export const handleCreateTransfer = async (req: Request): Promise<Response | void> => {
  await createTransfer(req.body);
};

export const handleGetTransfer = async (req: Request): Promise<TransferReport[]> => {
  return await getTransfers(req.query);
};
