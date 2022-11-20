const bcrypt = {
  saltRounds: +process.env.SALT_ROUNDS || 10
};

export default bcrypt;
