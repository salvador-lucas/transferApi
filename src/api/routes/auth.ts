import { Router } from 'express';
import { handleLogin, handleUserSignup } from '~api/controllers/auth';
// import { handleChangePassword, handleLogin } from '~api/controllers/auth';
// import { checkJwt } from '~api/middlewares/checkjwt';
import { validateSchema } from '~api/middlewares/schema';
import { loginSchema, signupSchema } from '~api/schemas/auth';
// import { getUser } from '~api/middlewares/users';

const route = Router();

export default function generateAuthRoutes(app: Router): void {
  app.use('/auth', route);
  route.post('/signup', [validateSchema(signupSchema)], handleUserSignup);
  route.post('/login', [validateSchema(loginSchema)], handleLogin);
}
