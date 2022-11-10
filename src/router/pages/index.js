import express, { Router } from 'express';

import homeRouter from './home.pages';
import loginRouter from './login.pages';
import registerRouter from './register.pages';
import bloodInfoRouter from './blood-info.pages';

const router = Router();

router.use('/', homeRouter);
router.use('/login', loginRouter);
router.use('/register', registerRouter);
router.use('/blood-info', bloodInfoRouter);

export default router;
