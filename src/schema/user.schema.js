import Joi from 'joi';

import { BLOOD_GROUPS, GENDERS } from '../constants/user.constant';

export const userRegisterSchema = Joi.object({
  firstName: Joi.string().required().trim(),
  lastName: Joi.string().required().trim(),
  email: Joi.string().email().required().trim().lowercase(),
  password: Joi.string().min(6).required(),
  contact: Joi.number().required(),
  address: Joi.string().required().trim(),
  gender: Joi.string()
    .required()
    .valid(...GENDERS),
  bloodGroup: Joi.string()
    .required()
    .valid(...BLOOD_GROUPS)
});

export const userUpdateSchema = Joi.object({
  firstName: Joi.string().required().trim(),
  lastName: Joi.string().required().trim(),
  email: Joi.string().email().required().trim(),
  password: Joi.string().min(6).required(),
  contact: Joi.number().required(),
  address: Joi.string().required().trim(),
  gender: Joi.string()
    .required()
    .valid(...GENDERS),
  bloodGroup: Joi.string()
    .required()
    .valid(...BLOOD_GROUPS)
});
