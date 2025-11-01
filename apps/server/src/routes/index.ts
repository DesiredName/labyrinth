import express from 'express'
import { router as AuthRoutes } from "./auth.router.ts";

const router = express.Router();

router.use('/auth', AuthRoutes);

export { router }