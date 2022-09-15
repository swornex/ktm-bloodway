// const logger = require('../utils/logger.utils');
import logger from '../utils/logger.utils';

const log = (req, resp, next) => {
  const getLog = (
    method,
    originalUrl,
    statusCode,
    timeTaken,
    contentLength
  ) => {
    const baseLog = `${method} ${originalUrl} Status: ${statusCode} CPU Time: ${timeTaken}ms Content Length: ${contentLength}`;

    return baseLog;
  };

  const { method, originalUrl } = req;
  const startTime = Date.now();

  resp.on('finish', () => {
    const { statusCode } = resp;
    const contentLength = resp.get('content-length');
    const timeTaken = Date.now() - startTime;

    logger.info(
      getLog(method, originalUrl, statusCode, timeTaken, contentLength)
    );
  });

  next();
};

export default log;

//export default {log,bag};
//import {log,bag} from "...";
//import * as log from "..";
