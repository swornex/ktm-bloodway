import Joi from 'joi';

import { BLOOD_GROUPS } from '../constants/user.constant';

const requestBloodSchema = Joi.object({
  firstName: Joi.string().required().trim(),
  lastName: Joi.string().required().trim(),
  email: Joi.string().email().required().trim().lowercase(),
  contact: Joi.number().required(),
  bloodGroup: Joi.string()
    .required()
    .valid(...BLOOD_GROUPS),
  note: Joi.string().required().trim().min(3).max(2000)
});

export default requestBloodSchema;
