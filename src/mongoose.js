import mongoose from 'mongoose';

import logger from './utils/logger.utils';
import database from './config/database.config';

(async () => {
  try {
    await mongoose.connect(database.connectionString);
    logger.info('Database connected successfully!');
  } catch (e) {
    logger.error(e);
  }
})();
