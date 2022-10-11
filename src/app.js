import './dotenv';
import './mongoose';

import express from 'express';

import router from './router';
import logger from './middleware/logger.middleware';

const app = express();

app.set('view engine', 'ejs');

//this will automatically parse(convert) incoming json to an object
app.use(express.json());
//this will automatically parse(convert) incoming form-encoded to an object
app.use(express.urlencoded({ extended: true }));
app.use(logger);

app.use(router);

export default app;
