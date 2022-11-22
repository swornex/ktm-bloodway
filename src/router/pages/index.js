import { Router } from 'express';

import authenticate from '../../middleware/authenticate.fe.middleware';
import checkUser from '../../middleware/check-user.middleware';

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
router.get('/donate', authenticate, donate);
router.get('/request', authenticate, request);
router.get('/register', register);
router.get('/blood-info', bloodInfo);
router.get('/blood-bank', bloodBank);

export default router;
