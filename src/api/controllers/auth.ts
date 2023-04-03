import { Request } from 'express';
import { LoginUser } from '~api/models/users';
import { login, userSignup } from '~api/services/auth';

export const handleUserSignup = async (req: Request): Promise<void> => {
  await userSignup(req.body);
};

export const handleLogin = async (req: Request): Promise<LoginUser> => {
  return await login(req.body);
};
