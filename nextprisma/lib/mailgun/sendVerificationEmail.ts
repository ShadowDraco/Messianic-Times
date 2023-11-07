import { mailgunClient } from './mailgun'

const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN || ''

export default async function sendVerificationEmail(user, token) {
  const messageData = {
    from: `Verify for MWS <Messianic@WebServices>`,
    to: user.email,
    subject: 'Please Activate your account',
    html: `<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <style>
        .textCenter {
          text-align: center
        }
    	.center {
       		margin: auto
      }

    </style>
  </head>
  <body class="bg-light">
    <div class="container">
      <div class="card my-10">
        <div class="card-body">
          <h1 class="h3 mb-2 textCenter">The Messianic Times</h1>
          <h5 class="text-teal-700 textCenter">Please verify your email address.</h5>
          <hr>
          <div class="space-y-3">
            <p class="text-gray-700 textCenter">
            Welcome to The Messianic Times ${user.name}	
            <br>
            From here you can learn more about the movement and stay in the loop. 
            </p>
           
          </div>
          <hr>
          <a class="btn btn-primary center" href="https://nextprisma-topaz.vercel.app/${token.token}" target="_blank">Verify me!</a>
        </div>
      </div>
    </div>
  </body>
    `,
  }

  await mailgunClient.messages.create(MAILGUN_DOMAIN, messageData)
}
