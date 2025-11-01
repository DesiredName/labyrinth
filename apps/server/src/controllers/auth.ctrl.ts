import type { Request, Response } from "express";
import asyncHandler from "../utils/asyncRequestHandler.ts";
import { UserService } from "../services/user.srv.ts";
import { CreateUserParams } from "../services/user.srv.ts";

const signIn = asyncHandler(async (req: Request, res: Response) => {
    const params = CreateUserParams.parse(req.body);
    const user = await UserService.getUserByNameAndPass(params.name, params.password);
    res.json(user);
});

const signUp = asyncHandler(async (req: Request, res: Response) => {
    const params = CreateUserParams.parse(req.body);
    const user = await UserService.createUser(params.name, params.password);
    res.json(user);
});

export { signIn, signUp };