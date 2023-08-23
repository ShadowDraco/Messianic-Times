import { mailgunClient } from './mailgun';

const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN || '';

export default async function sendVerificationEmail(user, token) {
  const messageData = {
    from: `Verify for MWS <Messianic@WebServices>`,
    to: user.email,
    subject: 'Please Activate your account',
    html: `<div>
    <h4>Hello ${user.name},</h4>
    <br></br>
    <p>please activate your account by clicking this link:</p> 
    <a href="http://localhost:3000/api/auth/activate/${token.token}">
    <button>Verify my email!</button>
    </a>
    </div>
    `,
  };

  await mailgunClient.messages.create(MAILGUN_DOMAIN, messageData);
}
