import type { Request, Response, NextFunction } from 'express';
import { logError } from '../services/log.srv.ts';
import { verifyAuthCookie } from '../utils/assignAuthCookie.ts';
import { wrpappedResponse } from '../utils/wrapperResponse.ts';

function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const user = verifyAuthCookie(req);
  if (user == null) {
    wrpappedResponse(res, false, undefined, 401);
    logError('Unauthorized access', {
      url: req.originalUrl,
      method: req.method,
      body: req.body ?? {},
    });
  } else {
    next();
  }
}

export { authMiddleware };
