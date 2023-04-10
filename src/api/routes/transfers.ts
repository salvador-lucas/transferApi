import { Router } from 'express';
import { handleCreateTransfer, handleGetTransfer } from '~api/controllers/transfers';
import asyncHandler from 'express-async-handler';
import { checkJwt } from '~api/middlewares/checkjwt';
import { validateSchema } from '~api/middlewares/schema';
import { transferSchema } from '~api/schemas/transfers';

const route = Router();

export default function generateTransferRoutes(app: Router): void {
  app.use('/transfer', route);
  route.post('/', [validateSchema(transferSchema), checkJwt], asyncHandler(handleCreateTransfer));

  route.get('/', [checkJwt], asyncHandler(handleGetTransfer));
}
