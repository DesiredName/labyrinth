import type { Request, Response } from 'express';
import { AuthService } from '../services/auth.srv.ts';
import { SigninUserRequest, SignupUserRequest } from '@webx/shared';
import {
  assignAuthCookie,
  clearAuthCookie,
  verifyAuthCookie,
} from '../utils/assignAuthCookie.ts';
import { wrpappedResponse } from '../utils/wrapperResponse.ts';
import { wrappedRequestHandler } from '../utils/wrappedRequestHandler.ts';
import { UserService } from '../services/user.srv.ts';

const signIn = wrappedRequestHandler(async (req: Request, res: Response) => {
  const params = SigninUserRequest.parse(req.body);
  const user = await AuthService.verifyUser(params.email, params.password);
  if (user != null) assignAuthCookie(res, user);
  wrpappedResponse(res, user != null, user, 401);
});

const signUp = wrappedRequestHandler(async (req: Request, res: Response) => {
  const params = SignupUserRequest.parse(req.body);
  const user = await AuthService.registerNewUser(
    params.email,
    params.username,
    params.password,
  );
  if (user != null) assignAuthCookie(res, user);
  wrpappedResponse(res, user != null, user, 501);
});

const signOut = wrappedRequestHandler(async (req: Request, res: Response) => {
  clearAuthCookie(res);
  wrpappedResponse(res, true);
});

const check = wrappedRequestHandler(async (req: Request, res: Response) => {
  const probablyUser = verifyAuthCookie(req);
  const user = await UserService.getProfile(probablyUser?.email);
  wrpappedResponse(res, user != null, {}, 401);
});

export { signIn, signUp, signOut, check };
