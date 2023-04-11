import { Router } from 'express';
import generateHealthRoute from './health';
import generateAuthRoutes from './auth';
import generateTransferRoutes from './transfers';
import generateUsersRoutes from './users';
import generateCurrenciesRoutes from './currencies';
// import generateAuthRoutes from '~routes/auth';

const router = Router();

const generateRoutes = (): Router => {
  //health routes
  generateHealthRoute(router);

  //auth routes
  generateAuthRoutes(router);

  //trasnfer routes
  generateTransferRoutes(router);

  //users routes
  generateUsersRoutes(router);

  //currencies routes
  generateCurrenciesRoutes(router);

  return router;
};

export default generateRoutes;
