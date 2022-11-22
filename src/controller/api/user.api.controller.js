import bcrypt from 'bcrypt';
import { StatusCodes as HttpStatus } from 'http-status-codes';

import User from '../../model/user.model.js';
import logger from '../../utils/logger.utils.js';
import generateToken from '../../utils/token.utils.js';
import { handleError } from '../../utils/error.utils.js';

export const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      contact,
      address,
      gender,
      bloodGroup
    } = req.body;

    const user = new User({
      firstName,
      lastName,
      email,
      password,
      contact,
      address,
      gender,
      bloodGroup
    });

    await user.save();

    const token = generateToken(user);

    res.status(HttpStatus.CREATED).json({
      message: 'User registered successfully',
      user,
      token
    });
  } catch (e) {
    handleError(res, e);
    logger.error(e);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    const isPasswordValid = await bcrypt.compare(
      password,
      user?.password || ''
    );

    if (!user || !isPasswordValid) {
      return res.status(HttpStatus.UNAUTHORIZED).json({
        message: 'Invalid email or password'
      });
    }

    const token = generateToken(user);

    res.status(HttpStatus.OK).json({
      message: 'User logged in successfully',
      user,
      token
    });
  } catch (e) {
    handleError(res, e);
    logger.error(e);
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    if (!users.length) {
      return res.status(HttpStatus.NO_CONTENT).json({
        message: 'No users found'
      });
    }

    res.status(HttpStatus.OK).json({
      users
    });
  } catch (e) {
    handleError(res, e);
    logger.error(e);
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(HttpStatus.NOT_FOUND).json({
        message: 'User not found'
      });
    }

    res.status(HttpStatus.OK).json({
      user
    });
  } catch (e) {
    handleError(res, e);
    logger.error(e);
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { user: currentUser } = req;

  try {
    if (currentUser._id.toString() !== id) {
      return res.status(HttpStatus.FORBIDDEN).json({
        message: 'Forbidden'
      });
    }

    const user = await User.findOne({ _id: id });

    if (!user) {
      return res.status(HttpStatus.NOT_FOUND).json({
        message: 'User not found'
      });
    }

    const properties = Object.keys(req.body);
    properties.forEach((property) => {
      user[property] = req.body[property];
    });

    await user.save();

    res.status(HttpStatus.OK).json({
      message: 'User updated successfully',
      user
    });
  } catch (e) {
    handleError(res, e);
    logger.error(e);
  }
};
