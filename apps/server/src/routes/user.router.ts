import express from 'express';
import { getProfile } from '../controllers/user.ctrl.ts';
import { authMiddleware } from '../middleware/auth.middleware.ts';

const router = express.Router();

router.post('/profile', authMiddleware, getProfile);

export { router };
