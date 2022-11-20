import { Router } from 'express';

import {
  userRegisterSchema,
  userUpdateSchema
} from '../../schema/user.schema.js';
import loginSchema from '../../schema/login.schema.js';

import authenticate from '../../middleware/authenticate.middleware.js';
import validateSchema from '../../middleware/validateSchema.middleware.js';

import * as userController from '../../controller/api/user.api.controller.js';

const router = Router();

router.post(
  '/register',
  validateSchema(userRegisterSchema),
  userController.register
);

router.post('/login', validateSchema(loginSchema), userController.login);

router.get('/', authenticate, userController.getUsers);

router.get('/:id', authenticate, userController.getUser);

router.put(
  '/:id',
  authenticate,
  validateSchema(userUpdateSchema),
  userController.updateUser
);

export default router;
