import { Router } from 'express';

import userRouter from './user.api';
import bloodBankRouter from './blood-bank.api';

const router = Router();

router.use('/users', userRouter);

router.use(bloodBankRouter);

export default router;
