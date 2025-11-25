import express from 'express';
import { getProfile } from '../controllers/user.ctrl.ts';

const router = express.Router();

router.post('/profile', getProfile);

export { router };
