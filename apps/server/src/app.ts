import express from 'express';
import { router } from './routes/index.ts';
import { errorMiddleware } from './middleware/error.middleware.ts';
import cors from 'cors';
import { HTTP_CODES } from '@shared/index.ts';

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

// 404
app.use((req, res, next) => {
  res.sendStatus(HTTP_CODES.NOT_FOUND);
});

// global error
app.use(errorMiddleware);

export { app };
