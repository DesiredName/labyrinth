import type { Request, Response, NextFunction } from 'express';
import { logError } from '../services/log.srv.ts';
import { wrpappedResponse } from '../utils/wrapperResponse.ts';

function errorMiddleware(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const status = 500;
  const stack =
    process.env.NODE_ENV === 'development'
      ? err instanceof Error
        ? err.stack
        : err
      : undefined;
  const details = err instanceof Error ? err.message : undefined;

  logError(err, {
    time: Date.now(),
    path: req.originalUrl,
    method: req.method,
    status,
    details,
    stack,
  });

  wrpappedResponse(res, false, undefined, status);
}

export { errorMiddleware };
