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
      return res.status(HttpStatus.NOT_FOUND).json({
        message: 'No request Blood found'
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
      bloodGroup,
      requestId
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

    const savePromises = [donateBlood.save()];

    if (requestId) {
      const requestBlood = await RequestBlood.findById(requestId);

      if (!requestBlood) {
        return res.status(HttpStatus.NOT_FOUND).json({
          message: 'No request Blood found'
        });
      }

      requestBlood.donors.push({ donationId: donateBlood._id });

      savePromises.push(requestBlood.save());
    }

    await Promise.all(savePromises);

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
      return res.status(HttpStatus.NOT_FOUND).json({
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

//fetch request
export const fetchOneRequest = async (req, resp) => {
  const { id } = req.params;

  try {
    const requestBlood = await RequestBlood.findById(id);

    if (!requestBlood) {
      return handleError(
        resp,
        new Error('Blood Request not found!'),
        HttpStatus.NOT_FOUND
      );
    }

    resp.status(HttpStatus.OK).send(requestBlood);
  } catch (e) {
    handleError(resp, e);
    logger.error(e);
  }
};

//update request
export const updateRequest = async (req, res) => {
  const { id } = req.params;
  const { user: currentUser } = req;

  try {
    const bloodRequest = await RequestBlood.findOne({
      _id: id,
      userId: currentUser._id
    });

    if (!bloodRequest) {
      return res.status(HttpStatus.NOT_FOUND).json({
        message: 'Blood Request not found'
      });
    }

    const properties = Object.keys(req.body);
    properties.forEach((property) => {
      bloodRequest[property] = req.body[property];
    });

    await bloodRequest.save();

    res.status(HttpStatus.OK).json({
      message: 'Blood Request updated successfully',
      bloodRequest
    });
  } catch (e) {
    handleError(res, e);
    logger.error(e);
  }
};

// fetch donor
export const fetchOneDonate = async (req, resp) => {
  const { id } = req.params;

  try {
    const donateBlood = await DonateBlood.findById(id);

    if (!donateBlood) {
      return handleError(
        resp,
        new Error('Blood Donor not found!'),
        HttpStatus.NOT_FOUND
      );
    }

    resp.status(HttpStatus.OK).send(donateBlood);
  } catch (e) {
    handleError(resp, e);
    logger.error(e);
  }
};

// update donor
export const updateDonor = async (req, res) => {
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
