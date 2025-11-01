import type { Request, Response, NextFunction } from 'express';

function asyncHandler(
  handler: MaybeAsyncRequestHandler,
): MaybeAsyncRequestHandler {
  return async (req, res, next) => handler(req, res, next);
}

export type MaybeAsyncRequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => void | Promise<void>;
export default asyncHandler;
