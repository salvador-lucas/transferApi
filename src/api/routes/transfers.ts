import { Request, Response, Router } from 'express';
import { handleCreateTransfer, handleGetTransfer } from '~api/controllers/transfers';
import asyncHandler from '~api/middlewares/asyncHandler';
import { checkJwt } from '~api/middlewares/checkjwt';
import { validateSchema } from '~api/middlewares/schema';
import { transferSchema } from '~api/schemas/transfers';
import { STATUS_CODES } from '~constants';

const route = Router();

export default function generateTransferRoutes(app: Router): void {
  app.use('/transfer', route);
  route.post('/', [validateSchema(transferSchema), checkJwt], asyncHandler(async(req: Request, res: Response) => {
    await handleCreateTransfer(req);
    res.status(STATUS_CODES.CREATED).send();
  }));

  route.get('/', [checkJwt], asyncHandler(async(req: Request, res: Response) => {
    const transfers = await handleGetTransfer(req);
    res.status(STATUS_CODES.OK).send(transfers);
  }));
}
