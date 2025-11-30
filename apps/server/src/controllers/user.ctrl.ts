import type { Request, Response } from 'express';
import { UserService } from '../services/user.srv.ts';
import { verifyAuthCookie } from '../utils/assignAuthCookie.ts';
import { RequestHelpers } from '../utils/requestHelpers.ts';

const getProfile = async (req: Request, res: Response) => {
  const session = verifyAuthCookie(req);
  const user = await UserService.getProfile(session?.email);

  if (user == null) return RequestHelpers.forbidden(res);

  RequestHelpers.success(res, user);
};

export { getProfile };
