import type { Request, Response } from 'express';
import { UserService } from '../services/user.srv.ts';
import { verifyAuthCookie } from '../utils/assignAuthCookie.ts';
import { wrpappedResponse } from '../utils/wrapperResponse.ts';
import { wrappedRequestHandler } from '../utils/wrappedRequestHandler.ts';

const getProfile = wrappedRequestHandler(
  async (req: Request, res: Response) => {
    const probablyUser = verifyAuthCookie(req);
    const user = await UserService.getProfile(probablyUser?.email);
    wrpappedResponse(res, user != null, user, 401);
  },
);

export { getProfile };
