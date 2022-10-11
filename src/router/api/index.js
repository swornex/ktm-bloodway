import { Router } from 'express';

import userRouter from './user.api';

const router = Router();

router.use('/users', userRouter);

export default router;
