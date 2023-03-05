import { Router } from 'express';
import generateHealthRoute from '~routes/health';
import generateAuthRoutes from './auth';
// import generateAuthRoutes from '~routes/auth';

const router = Router();

const generateRoutes = (): Router => {
  //health routes
  generateHealthRoute(router);

  //auth routes
  generateAuthRoutes(router);

  return router;
};

export default generateRoutes;
