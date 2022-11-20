import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

import { USER } from '../constants/model.constant';
import bcryptConfig from '../config/bcrypt.config';

const userSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String
  },
  contact: {
    type: Number
  },
  address: {
    type: String
  },
  gender: {
    type: String
  },
  bloodGroup: {
    type: String
  }
});

userSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;
  return user;
};

userSchema.pre('save', async function (next) {
  const user = this;

  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, bcryptConfig.saltRounds);
  }

  next();
});

const User = mongoose.model(USER, userSchema);

export default User;
