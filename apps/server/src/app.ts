import express from 'express';
import { router } from './routes/index.ts';
import { errorMiddleware } from './middleware/error.middleware.ts';

const app = express();

app.use(express.static('static'));
app.use(express.json());
app.use('/api', router);
app.use(errorMiddleware);

export { app }
