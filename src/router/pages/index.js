import express, { Router } from 'express';

import homeRouter from './home.pages';
import loginRouter from './login.pages';
import donateRouter from './donate.pages';
import requestRouter from './request.pages';
import registerRouter from './register.pages';
import bloodBankRouter from './blood-bank.pages';
import bloodInfoRouter from './blood-info.pages';

const router = Router();

router.use('/', homeRouter);
router.use('/login', loginRouter);
router.use('/donate', donateRouter);
router.use('/request', requestRouter);
router.use('/register', registerRouter);
router.use('/blood-bank', bloodBankRouter);
router.use('/blood-info', bloodInfoRouter);

export default router;
