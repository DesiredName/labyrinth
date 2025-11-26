import type { Request, Response, NextFunction } from 'express';
import { logError } from '../services/log.srv.ts';
import { HTTP_CODES } from '@webx/shared';

function errorMiddleware(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const status = HTTP_CODES.SERVER_ERROR;
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

  res.sendStatus(status);
}

export { errorMiddleware };
