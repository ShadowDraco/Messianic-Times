import { NextRequest, NextResponse } from 'next/server'
import prisma from '../../../lib/prisma/prisma'
import { findUser } from '../../../lib/prisma/crud'
import sendTicketEmail from '../../../lib/mailgun/sendTicketEmail'
export async function POST(request) {
  try {
    const req = await request.json()

    const user = await findUser(req.email)
    const realEmail = user ? true : false

    const ticket = await prisma.ticket.create({
      data: {
        title: req.title,
        important: req.important,
        realEmail,
        email: req.email,
        name: req.name,
        description: req.desc,
      },
    })

    if (ticket) {
      console.log('Ticket created successfully')
      const emailUser = realEmail ? user : { email: req.email, name: req.name }
      await sendTicketEmail(emailUser, ticket)
      console.log('Email send successfully')

      return NextResponse.json({
        message: 'successful ticket and email',
        success: true,
      })
    }
  } catch (error) {
    console.error('ERROR CREATING TICKET', error)
    return NextResponse.json({
      message: 'UNsuccessful ticket and email',
      success: false,
    })
  }
}
