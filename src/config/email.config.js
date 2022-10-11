const email = {
  transport: {
    service: process.env.EMAIL_SERVICE || 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  },
  emailStatus: process.env.SEND_MAIL_STATUS === 'true' ? true : false
};

export default email;
