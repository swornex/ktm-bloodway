import express from 'express';

const app = express();

app.get('/', (req, resp) => {
  resp.send('HI! This is API.');
});

export default app;
