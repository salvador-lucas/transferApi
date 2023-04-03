import { Request, Response, Router } from 'express';
import { handleLogin, handleUserSignup } from '~api/controllers/auth';
import asyncHandler from '~api/middlewares/asyncHandler';
import { validateSchema } from '~api/middlewares/schema';
import { loginSchema, signupSchema } from '~api/schemas/auth';
import { STATUS_CODES } from '~constants';

const route = Router();

export default function generateAuthRoutes(app: Router): void {
  app.use('/auth', route);

  route.post('/signup', [validateSchema(signupSchema)],  asyncHandler(async(req: Request, res: Response) => {
    await handleUserSignup(req);
    res.status(STATUS_CODES.CREATED).send();
  }));

  route.post('/login', [validateSchema(loginSchema)],  asyncHandler(async(req: Request, res: Response) => {
    const loggedUser = await handleLogin(req);
    res.status(STATUS_CODES.OK).send(loggedUser);
  }));
}
