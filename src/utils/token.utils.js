import jwt from 'jsonwebtoken';

import jwtConfig from '../config/jwt.config.js';

const generateToken = (user) => {
  const token = jwt.sign({ id: user._id.toString() }, jwtConfig.jwtSecret, {
    expiresIn: jwtConfig.jwtExpireTime
  });

  return token;
};

export default generateToken;
