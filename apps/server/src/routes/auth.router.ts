import express from 'express';
import { signIn, signUp, signOut } from '../controllers/auth.ctrl.ts';
import { authMiddleware } from '../middleware/auth.middleware.ts';

const router = express.Router();

router.post('/signin', signIn);
router.post('/signup', signUp);
router.post('/signout', authMiddleware, signOut);

export { router };
