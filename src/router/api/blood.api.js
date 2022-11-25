import { Router } from 'express';

import requestBloodSchema from '../../schema/request.schema.js';
import donateBloodSchema from '../../schema/donate.schema.js';

import authenticate from '../../middleware/authenticate.middleware.js';
import validateSchema from '../../middleware/validateSchema.middleware.js';

import * as bloodController from '../../controller/api/blood.api.controller';

const router = Router();

router.post(
  '/request',
  authenticate,
  validateSchema(requestBloodSchema),
  bloodController.bloodRequest
);

router.get('/request', bloodController.getBloodRequests);

router.get('/request/:id', authenticate, bloodController.fetchOneRequest);

router.put('/request/:id', authenticate, bloodController.updateRequest);

router.post(
  '/donate',
  authenticate,
  validateSchema(donateBloodSchema),
  bloodController.bloodDonate
);

router.get('/donate', authenticate, bloodController.getBloodDonors);

export default router;
