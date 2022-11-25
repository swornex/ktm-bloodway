import nodemailer from 'nodemailer';

import emailConfig from '../config/email.config';

const transporter = nodemailer.createTransport(emailConfig.transport);

const sendRequestMail = (email, name, requesterName) => {
  transporter.sendMail({
    from: `"KTM Bloodway" <${user}>`,
    to: email,
    subject: 'Request for blood',
    text: `Hi ${name}! ${requesterName} is in need of blood. Please contact him/her as soon as possible.`
  });
};

export { sendRequestMail };
