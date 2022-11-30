import './dotenv';
import './mongoose';

import path from 'path';
import express from 'express';
import livereload from 'livereload';
import cookieParser from 'cookie-parser';
import connectLiveReload from 'connect-livereload';
import session from 'express-session';
import flash from 'connect-flash';

import router from './router';
import logger from './middleware/logger.middleware';
import checkUser from './middleware/check-user.middleware';
import sessionConfig from './config/session.config';

//Livereload server code
const liveReloadServer = livereload.createServer();

liveReloadServer.watch('public');

liveReloadServer.server.once('connection', () => {
  setTimeout(() => {
    liveReloadServer.refresh('/');
  }, 10);
});

const app = express();

app.set('view engine', 'ejs');

app.use(connectLiveReload());
//this will automatically parse(convert) incoming json to an object
app.use(express.json());
//this will automatically parse(convert) incoming form-encoded to an object
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css'))
);
app.use(
  express.static(path.join(__dirname, '../node_modules/bootstrap/dist/js'))
);
app.use(express.static('public'));
app.use(checkUser);
app.use(logger);
app.use(
  session({
    secret: sessionConfig.secret,
    resave: false,
    saveUninitialized: true
  })
);
app.use(flash());

app.use(router);

export default app;
