import formData from 'form-data';
import Mailgun from 'mailgun.js';

const API_KEY = process.env.MAILGUN_SECRET_KEY || '';
const DOMAIN = process.env.MAILGUN_DOMAIN || '';

export default async function sendVerificationEmail(user, token) {
  const mailgun = new Mailgun(formData);
  const client = mailgun.client({ username: 'api', key: API_KEY });
  console.log('send email has user and token::::', user, token);
  const messageData = {
    from: `Example Email <hello@MessianicWebServices>`,
    to: user.email,
    subject: 'Please Activate your account',
    text: `Hello ${user.name}, please activate your account by clicking this link: http://localhost:3000/api/activate/${token.token}`,
  };

  await client.messages.create(DOMAIN, messageData);
}
