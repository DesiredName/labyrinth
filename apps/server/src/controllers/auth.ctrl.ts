import type { Request, Response } from 'express';
import asyncHandler from '../utils/asyncRequestHandler.ts';
import { UserService } from '../services/user.srv.ts';
import { SigninUserParams, SignupUserParams } from '../services/user.srv.ts';

const signIn = asyncHandler(async (req: Request, res: Response) => {
  const params = SigninUserParams.parse(req.body);
  const user = await UserService.getUserByEmailAndPass(
    params.email,
    params.password,
  );
  res.json(user);
});

const signUp = asyncHandler(async (req: Request, res: Response) => {
  const params = SignupUserParams.parse(req.body);
  const user = await UserService.createUser(
    params.email,
    params.username,
    params.password,
  );
  res.json(user);
});

export { signIn, signUp };
