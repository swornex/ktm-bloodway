import mongoose from 'mongoose';

import logger from './utils/logger.utils';
import connection from './config/database.config';

(async () => {
  try {
    await mongoose.connect(connection.connection_string);
    logger.info('Database connected successfully!');
  } catch (e) {
    logger.error(e);
  }
})();
