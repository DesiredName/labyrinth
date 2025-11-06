import type { Request, Response } from 'express';
import { AuthService } from '../services/auth.srv.ts';
import { SigninUserParams, SignupUserParams } from '../services/auth.srv.ts';
import {
  assignAuthCookie,
  clearAuthCookie,
} from '../utils/assignAuthCookie.ts';
import { wrpappedResponse } from '../utils/wrapperResponse.ts';
import { wrappedRequestHandler } from '../utils/wrappedRequestHandler.ts';

const signIn = wrappedRequestHandler(async (req: Request, res: Response) => {
  const params = SigninUserParams.parse(req.body);
  const user = await AuthService.verifyUser(params.email, params.password);
  if (user != null) assignAuthCookie(res, user);
  wrpappedResponse(res, user != null, user, 401);
});

const signUp = wrappedRequestHandler(async (req: Request, res: Response) => {
  const params = SignupUserParams.parse(req.body);
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

export { signIn, signUp, signOut };
