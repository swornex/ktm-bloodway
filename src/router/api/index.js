import { Router } from 'express';

import userRouter from './user.api';
import bloodBankRouter from './blood-bank.api';

const router = Router();

router.use(bloodBankRouter);

router.use('/users', userRouter);

export default router;
