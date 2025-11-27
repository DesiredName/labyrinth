import express from 'express';
import { login, register, signout, check } from '../controllers/auth.ctrl.ts';
import { authMiddleware } from '../middleware/auth.middleware.ts';
import { validatedSchema } from '../middleware/schema.middleware.ts';
import { LoginUserRequest, RegisterUserRequest } from '@webx/shared';

const router = express.Router();

router.post('/login', validatedSchema(LoginUserRequest), login);
router.post('/register', validatedSchema(RegisterUserRequest), register);
router.post('/signout', authMiddleware, signout);
router.post('/check', authMiddleware, check);

export { router };
