import { StatusCodes as HttpStatus } from 'http-status-codes';

/**
 * @description Handles an error.
 *
 * @param {Response} resp
 * @param {Error} e
 * @param {Number} httpCode
 * @returns {Response}
 */
export const handleError = (resp, e, httpCode = HttpStatus.BAD_REQUEST) => {
  resp.status(httpCode).send({
    error: {
      message: e.message,
      details: e.details?.map((err) => {
        return {
          message: err.message,
          param: err.path.join('.')
        };
      })
    }
  });
};
