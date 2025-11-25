import express from 'express';
import { authMiddleware } from '../middleware/auth.middleware.ts';
import { router as AuthRouter } from './auth.router.ts';
import { router as UserRouter } from './user.router.ts';
import { router as WebsiteRouter } from './website.router.ts';
import { router as WebsitesRouter } from './websites.router.ts';

const router = express.Router();

router.use('/auth', AuthRouter);
router.use('/user', authMiddleware, UserRouter);
router.use('/website', authMiddleware, WebsiteRouter);
router.use('/websites', authMiddleware, WebsitesRouter);

export { router };
