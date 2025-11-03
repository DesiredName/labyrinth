import express from 'express';
import { router } from './routes/index.ts';
import { errorMiddleware } from './middleware/error.middleware.ts';
import cors from 'cors';

const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }),
);

app.use(express.static('static'));
app.use(express.json());
app.use('/api', router);
app.use(errorMiddleware);

export { app };
