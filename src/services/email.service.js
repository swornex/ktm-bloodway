import mail from '../config/email.config';
const sendMail = async ({ name, email, subject, text, html }) => {
  if (!mail.emailStatus) {
    return;
  }

  try {
    const transporter = nodemailer.createTransport(mail.transport);

    await transporter.sendMail({
      from: `"mhicha" <${name}>`,
      to: email,
      subject,
      text,
      html
    });
  } catch (e) {
    logger.error(e);
  }
};

export default sendMail;
