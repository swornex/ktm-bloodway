import Joi from 'joi';

const loginSchema = Joi.object({
  email: Joi.string().email().required().trim().lowercase(),
  password: Joi.string().min(6).required()
});

export default loginSchema;
