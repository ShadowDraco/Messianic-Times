import React from 'react'
import { Container } from '@mui/material'
import prisma from '../../../lib/prisma/prisma'
import TicketManager from './TicketManager'

export const revalidate = 60 * 60 // revalidate every 1 hour
export default async function page() {
  const allTickets = await prisma.ticket.findMany()

  const tableTicket = {
    realEmail: 'Real Email ',
    important: 'Important ',
    title: 'Title',
    description: 'Description',
    email: 'Email',
    name: 'Name',
  }
  return (
    <Container>
      <TicketManager tableTicket={tableTicket} allTickets={allTickets} />
    </Container>
  )
}
