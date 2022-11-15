import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();

router.get('/', async (req, resp) => {
  const response = await fetch('http://localhost:3000/api/blood-bank');
  const bloodBanks = await response.json();

  resp.render('blood-bank', { bloodBanks });
});

export default router;
