import express, { Application, Request, Response } from 'express';
// import { UserRoutes } from './app/modules/user/user.route';
import cors from 'cors';
import { router } from './app/routes';
import { globalErrorHandlers } from './app/middlewares/globalErrorHandlers';
import { notFound } from './app/middlewares/not-found';

const app: Application = express();
app.use(express.json())
app.use(cors())

app.use("/api/v1", router);

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: "Welcome to PH Tour Management Backend API" })
})


// Global Error Handler
app.use(globalErrorHandlers);

// Not found route handler
app.use(notFound);

export default app;