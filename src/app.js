import './dotenv';
import './mongoose';

import path from 'path';
import express from 'express';
import livereload from 'livereload';
import connectLiveReload from 'connect-livereload';

import router from './router';
import logger from './middleware/logger.middleware';

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
app.use(
  express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css'))
);
app.use(express.static('public'));
app.use(logger);

app.use(router);

export default app;
