import { NextFunction, Request, Response } from 'express';
import { login, userSignup } from '~api/services/auth';
import { STATUS_CODES } from '~constants';

export const handleUserSignup = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    await userSignup(req.body);
    return res.status(STATUS_CODES.CREATED).send();
  } catch (error) {
    return next(error);
  }
};

export const handleLogin = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    const loggedUser = await login(req.body);
    return res.status(STATUS_CODES.OK).send(loggedUser);
  } catch (error) {
    return next(error);
  }
};
