import express from 'express';

const router = express.Router();

router.get('/', (req, resp) => {
  resp.render('login-register-form', { isRegisterForm: true });
});

export default router;
