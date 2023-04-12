import { Request, Response } from 'express';
import { login, userSignup } from '~api/services/auth';
import { STATUS_CODES } from '~constants';

export const handleUserSignup = async (req: Request, res: Response): Promise<void> => {
  await userSignup(req.body);
  res.status(STATUS_CODES.CREATED).send();
};

export const handleLogin = async (req: Request, res: Response): Promise<void> => {
  const token = await login(req.body);
  res.status(STATUS_CODES.OK).send(token);
};
