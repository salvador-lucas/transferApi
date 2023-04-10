import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import { checkJwt } from '~api/middlewares/checkjwt';
import { validateSchema } from '~api/middlewares/schema';
import { handleCreateAccount, handleGetAccounts } from '~api/controllers/accounts';
import { userAccountSchema } from '~api/schemas/users';

const route = Router();

export default function generateUsersRoutes(app: Router): void {
  app.use('/users', route);
  route.post('/:userId/accounts', [validateSchema(userAccountSchema), checkJwt], asyncHandler(handleCreateAccount));
  route.get('/:userId/accounts', [checkJwt], asyncHandler(handleGetAccounts));
}
