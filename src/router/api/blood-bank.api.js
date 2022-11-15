import path from 'path';
import jsonServer from 'json-server';

const bloodBankRouter = jsonServer.router(
  path.join(__dirname, '../../db/blood-bank.json')
);

module.exports = bloodBankRouter;
