import jwt from 'jsonwebtoken';
import { StatusCodes as HttpStatus } from 'http-status-codes';

import User from '../model/user.model.js';
import jwtConfig from '../config/jwt.config';
import { handleError } from '../utils/error.utils.js';
import logger from '../utils/logger.utils.js';

const authenticate = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    const decoded = jwt.verify(token, jwtConfig.jwtSecret);
    console.log(decoded);
    const user = await User.findById(decoded.id);

    if (!user) {
      throw new Error();
    }

    req.user = {
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      contact: user.contact,
      address: user.address,
      bloodGroup: user.bloodGroup
    };

    next();
  } catch (e) {
    handleError(res, { message: 'Unauthorized' }, HttpStatus.UNAUTHORIZED);
    logger.error(e);
  }
};

export default authenticate;
