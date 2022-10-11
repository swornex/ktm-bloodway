import { Router } from 'express';

import apiRouter from './api';
import pagesRouter from './pages';

const router = Router();

router.use('/api', apiRouter);
router.use(pagesRouter);

export default router;
