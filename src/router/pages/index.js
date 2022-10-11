import { Router } from 'express';

import userRouter from './user.pages';

const router = Router();

router.use('/users', userRouter);

export default router;
