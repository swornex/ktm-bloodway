import winston from 'winston';

import loggerConfig from '../config/logger.config';

const level = loggerConfig.level;
const filename = loggerConfig.filename;
const { combine, printf } = winston.format;

const transports = [
  new winston.transports.Console({ level }),
  new winston.transports.File({
    filename,
    level
  })
];

const format = combine(
  winston.format.colorize(),
  winston.format.errors({ stack: true }),
  printf(({ level, message, stack }) => `[${level}] - ${stack || message}`)
);

const logger = winston.createLogger({
  format,
  transports
});

export default logger;
