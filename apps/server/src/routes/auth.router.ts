import express from 'express';
import { wrappedRequestHandler } from '../utils/wrappedRequestHandler.ts';
import { signIn, signUp, signOut } from '../controllers/auth.ctrl.ts';
import { authMiddleware } from '../middleware/auth.middleware.ts';

const router = express.Router();

router.post('/signin', wrappedRequestHandler(signIn));
router.post('/signup', wrappedRequestHandler(signUp));
router.post('/signout', authMiddleware, signOut);

export { router };
