import express from 'express'
import { wrappedRequestHandler } from '../utils/wrappedRequestHandler.ts';
import { signIn, signUp } from '../controllers/auth.ctrl.ts';

const router = express.Router();

router.post('/signin', wrappedRequestHandler(signIn));
router.post('/signup', wrappedRequestHandler(signUp));

export { router }