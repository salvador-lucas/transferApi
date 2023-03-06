import { Router } from 'express';
import generateHealthRoute from '~routes/health';
import generateAuthRoutes from './auth';
import generateTransferRoutes from './transfers';
// import generateAuthRoutes from '~routes/auth';

const router = Router();

const generateRoutes = (): Router => {
  //health routes
  generateHealthRoute(router);

  //auth routes
  generateAuthRoutes(router);

  //trasnfer routes
  generateTransferRoutes(router);

  return router;
};

export default generateRoutes;
