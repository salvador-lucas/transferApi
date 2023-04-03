import { NextFunction, Request, Response } from 'express';

type controllerFunction = (req: Request, res: Response, next: NextFunction) => Promise<void>;

const asyncHandler = (fn: controllerFunction) => (req: Request, res: Response, next: NextFunction): Promise<void> => {
  return Promise
    .resolve(fn(req, res, next))
    .catch(next);
};

export default asyncHandler;
