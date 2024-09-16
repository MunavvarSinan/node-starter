import { Router } from 'express';

import { UserRoutes } from './user.route';

export const routes: Router = Router();

const userRouter = new UserRoutes().routes();


routes.use('/user', userRouter);
