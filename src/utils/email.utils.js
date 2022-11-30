import nodemailer from 'nodemailer';

import emailConfig from '../config/email.config';

const transporter = nodemailer.createTransport(emailConfig.transport);

const sendRequestMail = (
  email,
  name,
  requesterName,
  bloodGroup,
  requesterGender
) => {
  transporter.sendMail({
    from: `"KTM Bloodway" <${name}>`,
    to: email,
    subject: 'Request for blood',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Request for blood</title>
        </head>
        <body>
          <p>Hi ${name},</p>
          <p>${requesterName} has requested for blood (${bloodGroup}). Please contact ${
      requesterGender.toLowerCase() === 'male' ? 'him' : 'her'
    } as soon as possible.</p>
          <p>Thank you.</p>
          <br/>
          <p>Regards,</p>
          <p>KTM Bloodway</p>
        </body>
      </html>
            `
  });
};

export { sendRequestMail };
