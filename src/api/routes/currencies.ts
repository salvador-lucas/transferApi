import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import { checkJwt } from '~api/middlewares/checkjwt';
import { handleGetCurrencies } from '~api/controllers/currencies';

const route = Router();

export default function generateCurrenciesRoutes(app: Router): void {
  app.use('/currencies', route);
  route.get('/', [checkJwt], asyncHandler(handleGetCurrencies));
}
