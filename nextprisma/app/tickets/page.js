import React from 'react'
import { Container, Box, Typography, IconButton, Stack } from '@mui/material'
import prisma from '../../lib/prisma/prisma'
import Ticket from './Ticket'
export default async function page() {
  const allTickets = await prisma.ticket.findMany()

  return (
    <Container>
      <Typography variant='h4'>View tickets</Typography>
      <Stack spacing={2} sx={{}}>
        {allTickets.map((ticket, i) => {
          return <Ticket key={i} ticket={ticket} />
        })}
      </Stack>
    </Container>
  )
}
