import { mailgunClient } from './mailgun'

const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN || ''

export default async function sendTicketEmail(user, ticket) {
  const messageData = {
    from: `Ticket for MWS <Messianic@WebServices>`,
    to: user.email,
    subject: 'We got your request :)',
    html: `<div>
    <h4>Hello ${user.name},</h4>
    <br></br>
    <p>We have received your request and will get back to you soon!</p> 
    <p>If your request was marked as important please be sure that we will see it first</p>
    <br>
    <p>Here are the details of your ticket</p>
    <p>Title: ${ticket.title}</p>
    <p>Description: ${ticket.description}</p>
    <br>
    <p>Please do not reply to this email, we will contact you soon.</p>
    </div>
    `,
  }

  await mailgunClient.messages.create(MAILGUN_DOMAIN, messageData)
}
