import type { Request, Response } from 'express';
import { AuthService } from '../services/auth.srv.ts';
import {
  HTTP_CODES,
  type LoginUserRequestType,
  type RegisterUserRequestType,
  type UserSafeAttributes,
} from '@webx/shared';
import {
  assignAuthCookie,
  clearAuthCookie,
  verifyAuthCookie,
} from '../utils/assignAuthCookie.ts';
import { UserService } from '../services/user.srv.ts';
import { RequestHelpers } from '../utils/requestHelpers.ts';

/**
 * helpers
 */
const AuthRequestHelpers = {
  success: (res: Response, user: UserSafeAttributes) => {
    assignAuthCookie(res, user);
    return res.status(HTTP_CODES.OK).json(user);
  },

  created: (res: Response, user: UserSafeAttributes) => {
    assignAuthCookie(res, user);
    return res.status(HTTP_CODES.CREATED).json(user);
  },
};

/**
 * login user
 */
const login = async (
  req: Request<{}, {}, LoginUserRequestType>,
  res: Response,
) => {
  const { email, password } = req.body;
  const user = await AuthService.verifyUser({ email, password });

  if (user == null) return RequestHelpers.not_found(res);

  return AuthRequestHelpers.success(res, user);
};

/**
 * register new user
 */
const register = async (
  req: Request<{}, {}, RegisterUserRequestType>,
  res: Response,
) => {
  const { email, username, password } = req.body;
  const user = await AuthService.registerNewUser({ email, username, password });

  if (user == null) return RequestHelpers.can_not_CRUD(res);

  return AuthRequestHelpers.created(res, user);
};

/**
 * signout user
 */
const signout = async (req: Request, res: Response) => {
  clearAuthCookie(res);
  res.sendStatus(HTTP_CODES.OK);
};

/**
 * Used to check if user is still logged in
 */
const check = async (req: Request, res: Response) => {
  const session = verifyAuthCookie(req);
  const user = await UserService.getProfile(session?.email);

  if (user == null) return RequestHelpers.unauthorized(res);

  return AuthRequestHelpers.success(res, user);
};

export { login, register, signout, check };
