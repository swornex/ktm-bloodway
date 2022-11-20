import logger from '../utils/logger.utils';
import { handleError } from '../utils/error.utils';
import validate from '../utils/validator.utils';

const validateSchema = (validateionSchema) => {
  return async (req, res, next) => {
    try {
      await validate(req.body, validateionSchema);
      next();
    } catch (e) {
      handleError(res, e);
      logger.error(e.message);
    }
  };
};

export default validateSchema;
