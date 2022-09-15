import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
//require('dotenv').config('.env');

import logger from './middleware/logger.middleware';
import userRouter from './router/user';

const app = express();

app.set('view engine', 'ejs');

//this will automatically parse(convert) incoming json to an object
app.use(express.json());
//this will automatically parse(convert) incoming form-encoded to an object
app.use(express.urlencoded({ extended: true }));
app.use(logger);

app.use('/users', userRouter);

export default app;
