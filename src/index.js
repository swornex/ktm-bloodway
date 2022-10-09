import app from './app';

import logger from './utils/logger.utils';
import server from './config/server.config';

app.listen(server.port, () => {
  logger.info(`The server is at ${server.port}.`);
});
