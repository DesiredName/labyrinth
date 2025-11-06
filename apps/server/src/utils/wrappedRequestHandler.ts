import { logError } from '../services/log.srv.ts';
import type { Request, Response, NextFunction } from 'express';

type MaybeAsyncRequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => void | Promise<void>;

function wrappedRequestHandler(
  handler: MaybeAsyncRequestHandler,
): MaybeAsyncRequestHandler {
  return async (req, res, next) => {
    try {
      await handler(req, res, next);
    } catch (err) {
      logError('Error occured', err);
      next(err);
    }
  };
}

export { wrappedRequestHandler };
export { type MaybeAsyncRequestHandler };
