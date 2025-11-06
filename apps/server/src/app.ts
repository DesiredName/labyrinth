import express from 'express';
import { router } from './routes/index.ts';
import { errorMiddleware } from './middleware/error.middleware.ts';
import cors from 'cors';
import { wrpappedResponse } from './utils/wrapperResponse.ts';

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
  wrpappedResponse(res, false);
});

// global error
app.use(errorMiddleware);

export { app };
