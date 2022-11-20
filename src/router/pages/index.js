import { Router } from 'express';

import {
  home,
  login,
  donate,
  request,
  register,
  bloodInfo,
  bloodBank
} from '../../controller/pages';

const router = Router();

router.get('/', home);
router.get('/login', login);
router.get('/donate', donate);
router.get('/request', request);
router.get('/register', register);
router.get('/blood-info', bloodInfo);
router.get('/blood-bank', bloodBank);

export default router;
