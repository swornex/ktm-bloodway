import { Router } from 'express';

import userRouter from './user.api';
import bloodRouter from './blood.api';
import bloodBankRouter from './blood-bank.api';

const router = Router();

router.use('/users', userRouter);
router.use('/blood', bloodRouter);

router.use(bloodBankRouter);

export default router;
