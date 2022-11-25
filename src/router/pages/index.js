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
  bloodBank,
  bloodDonate,
  bloodRequest
} from '../../controller/pages';

const router = Router();

router.get('/', home);
router.get('/login', login);
router.get('/donate', authenticate, donate);
router.get('/request', authenticate, request);
router.get('/register', register);
router.get('/blood-info', bloodInfo);
router.get('/blood-bank', bloodBank);
router.get('/blood-request', bloodRequest);
router.get('/blood-donate', authenticate, bloodDonate);
router.get('/request/:id', authenticate, request);
router.get('/donate/:id', authenticate, donate);

export default router;
