import type { Request, Response } from 'express';
import { AuthService } from '../services/auth.srv.ts';
import {
  HTTP_CODES,
  type SigninUserRequestType,
  type SignupUserRequestType,
} from '@webx/shared';
import {
  assignAuthCookie,
  clearAuthCookie,
  verifyAuthCookie,
} from '../utils/assignAuthCookie.ts';
import { UserService } from '../services/user.srv.ts';

const signIn = async (
  req: Request<{}, {}, SigninUserRequestType>,
  res: Response,
) => {
  const { email, password } = req.body;
  const user = await AuthService.verifyUser({ email, password });

  if (user == null) {
    return res.sendStatus(HTTP_CODES.UNAUTHORIZED);
  }

  assignAuthCookie(res, user);

  res.json(user);
};

const signUp = async (
  req: Request<{}, {}, SignupUserRequestType>,
  res: Response,
) => {
  const { email, username, password } = req.body;
  const user = await AuthService.registerNewUser({ email, username, password });

  if (user == null) {
    return res.sendStatus(HTTP_CODES.FORBIDDEN);
  }

  assignAuthCookie(res, user);

  res.status(HTTP_CODES.CREATED).json(user);
};

const signOut = async (req: Request, res: Response) => {
  clearAuthCookie(res);
  res.sendStatus(HTTP_CODES.OK);
};

const check = async (req: Request, res: Response) => {
  const probablyUser = verifyAuthCookie(req);
  const user = await UserService.getProfile(probablyUser?.email);

  if (user == null) {
    return res.sendStatus(HTTP_CODES.UNAUTHORIZED);
  }

  res.json(user);
};

export { signIn, signUp, signOut, check };
