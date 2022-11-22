import { StatusCodes as HttpStatus } from 'http-status-codes';

import logger from '../../utils/logger.utils.js';
import DonateBlood from '../../model/donate.model.js';
import RequestBlood from '../../model/request.model.js';
import { handleError } from '../../utils/error.utils.js';

export const bloodRequest = async (req, res) => {
  try {
    const { firstName, lastName, email, contact, bloodGroup, note } = req.body;

    const requestBlood = new RequestBlood({
      userId: req.user._id,
      firstName,
      lastName,
      email,
      contact,
      bloodGroup,
      note
    });

    await requestBlood.save();

    res.status(HttpStatus.OK).json({
      message: 'Blood Requested successfully',
      requestBlood
    });
  } catch (e) {
    handleError(res, e);
    logger.error(e);
  }
};

export const getBloodRequests = async (req, res) => {
  try {
    const requestBlood = await RequestBlood.find();

    if (!requestBlood.length) {
      return res.status(HttpStatus.NO_CONTENT).json({
        message: 'No requestBlood found'
      });
    }

    res.status(HttpStatus.OK).json({
      requestBlood
    });
  } catch (e) {
    handleError(res, e);
    logger.error(e);
  }
};

export const bloodDonate = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      contact,
      address,
      age,
      gender,
      bloodGroup
    } = req.body;

    const donateBlood = new DonateBlood({
      userId: req.user._id,
      firstName,
      lastName,
      email,
      contact,
      address,
      age,
      gender,
      bloodGroup
    });

    await donateBlood.save();

    res.status(HttpStatus.OK).json({
      message: 'Blood Donated successfully',
      donateBlood
    });
  } catch (e) {
    handleError(res, e);
    logger.error(e);
  }
};

export const getBloodDonors = async (req, res) => {
  try {
    const donateBlood = await DonateBlood.find();

    if (!donateBlood.length) {
      return res.status(HttpStatus.NO_CONTENT).json({
        message: 'No donors found'
      });
    }

    res.status(HttpStatus.OK).json({
      donateBlood
    });
  } catch (e) {
    handleError(res, e);
    logger.error(e);
  }
};
