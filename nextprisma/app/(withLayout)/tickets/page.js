import React from 'react'
import { Container } from '@mui/material'
import prisma from '../../../lib/prisma/prisma'
import TicketManager from './TicketManager'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../api/auth/[...nextauth]/route'
import NotLoggedIn from '../../../components/auth/NotLoggedIn'
import isAdmin from '../../../lib/auth-functions/isAdmin'
import NotAuthorized from '../../../components/auth/NotAuthorized'
export const revalidate = 60 * 60 // revalidate every 1 hour
export default async function page() {
  const session = await getServerSession(authOptions)

  if (!session) return <NotLoggedIn />
  if (isAdmin(session)) return <NotAuthorized />
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
