import { Request, Response } from 'express';
import { createAccount, getUserAccounts } from '~api/services/accounts';
import { STATUS_CODES } from '~constants';

export const handleCreateAccount = async (req: Request, res: Response): Promise<void> => {
  await createAccount(Number(req.params.userId), req.body);
  res.status(STATUS_CODES.CREATED).send();
};

export const handleGetAccounts = async (req: Request, res: Response): Promise<void> => {
  const accounts = await getUserAccounts(Number(req.params.userId));
  res.status(STATUS_CODES.OK).send(accounts);
};
