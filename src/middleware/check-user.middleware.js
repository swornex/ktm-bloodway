import jwt from 'jsonwebtoken';
import { StatusCodes as HttpStatus } from 'http-status-codes';

import User from '../model/user.model.js';
import jwtConfig from '../config/jwt.config';
import { handleError } from '../utils/error.utils.js';
import logger from '../utils/logger.utils.js';

const checkUser = async (req, res, next) => {
  res.locals.users = 'hi';
  try {
    const token = req.cookies?.access_token;

    if (!token) {
      res.locals.user = undefined;
      return next();
    }

    const decoded = jwt.verify(token, jwtConfig.jwtSecret);
    const user = await User.findById(decoded.id);

    if (!user) {
      res.locals.user = undefined;
      return next();
    }

    res.locals.user = {
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      contact: user.contact,
      address: user.address,
      gender: user.gender,
      bloodGroup: user.bloodGroup
    };

    next();
  } catch (e) {
    handleError(res, { message: 'Unauthorized' }, HttpStatus.UNAUTHORIZED);
    logger.error(e);
  }
};

export default checkUser;
