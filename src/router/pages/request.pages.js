import express from 'express';

const router = express.Router();

router.get('/', (req, resp) => {
  resp.render('request-donate-form', { isRequestForm: true });
});

export default router;
