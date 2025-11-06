import express from 'express';
import { router as AuthRouter } from './auth.router.ts';
import { router as UserRouter } from './user.router.ts';

const router = express.Router();

router.use('/auth', AuthRouter);
router.use('/user', UserRouter);

export { router };
