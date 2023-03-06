import { Router } from 'express';
import { handleCreateTransfer } from '~api/controllers/transfers';
import { checkJwt } from '~api/middlewares/checkjwt';
import { validateSchema } from '~api/middlewares/schema';
import { transferSchema } from '~api/schemas/transfers';

const route = Router();

export default function generateTransferRoutes(app: Router): void {
  app.use('/transfer', route);
  route.post('/', [validateSchema(transferSchema), checkJwt], handleCreateTransfer);
}
