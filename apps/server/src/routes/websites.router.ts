import express from 'express';
import { getWebsites } from '../controllers/websites.ctrl.ts';

const router = express.Router();

router.get('/', getWebsites);

export { router };
