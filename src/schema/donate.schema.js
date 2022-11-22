import Joi from 'joi';

import { BLOOD_GROUPS, GENDERS } from '../constants/user.constant';

const donateBloodSchema = Joi.object({
  firstName: Joi.string().required().trim(),
  lastName: Joi.string().required().trim(),
  email: Joi.string().email().required().trim().lowercase(),
  contact: Joi.number().required(),
  address: Joi.string().required().trim(),
  age: Joi.number().required().min(18).max(65),
  gender: Joi.string()
    .required()
    .valid(...GENDERS),
  bloodGroup: Joi.string()
    .required()
    .valid(...BLOOD_GROUPS)
});

export default donateBloodSchema;
