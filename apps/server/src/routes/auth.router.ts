import express from 'express';
import { signIn, signUp, signOut, check } from '../controllers/auth.ctrl.ts';
import { authMiddleware } from '../middleware/auth.middleware.ts';
import { validate } from '../middleware/schema.middleware.ts';
import { SigninUserRequest, SignupUserRequest } from '@shared/index.ts';

const router = express.Router();

router.post('/signin', validate(SigninUserRequest), signIn);
router.post('/signup', validate(SignupUserRequest), signUp);
router.post('/signout', authMiddleware, signOut);
router.post('/check', authMiddleware, check);

export { router };
