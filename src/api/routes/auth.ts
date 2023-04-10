import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import { handleLogin, handleUserSignup } from '~api/controllers/auth';
import { validateSchema } from '~api/middlewares/schema';
import { loginSchema, signupSchema } from '~api/schemas/auth';

const route = Router();

export default function generateAuthRoutes(app: Router): void {
  app.use('/auth', route);

  route.post('/signup', [validateSchema(signupSchema)], asyncHandler(handleUserSignup));
  route.post('/login', [validateSchema(loginSchema)], asyncHandler(handleLogin));
}
