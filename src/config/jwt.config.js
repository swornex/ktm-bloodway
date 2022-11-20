const jwt = {
  jwtSecret: process.env.JWT_SECRET,
  jwtExpireTime: process.env.JWT_EXPIRES_IN || '24h'
};

export default jwt;
