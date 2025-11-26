import type { Request, Response } from 'express';
import { UserService } from '../services/user.srv.ts';
import { verifyAuthCookie } from '../utils/assignAuthCookie.ts';
import { HTTP_CODES } from '@shared/index.ts';

const getProfile = async (req: Request, res: Response) => {
  const probablyUser = verifyAuthCookie(req);
  const user = await UserService.getProfile(probablyUser?.email);

  if (user == null) {
    return res.sendStatus(HTTP_CODES.UNAUTHORIZED);
  }

  res.json(user);
};

export { getProfile };
