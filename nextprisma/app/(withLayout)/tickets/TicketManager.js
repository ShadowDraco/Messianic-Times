'use client'
import React, { useState } from 'react'
import { Box, Typography, Stack, Button } from '@mui/material'
import Ticket from './Ticket'
export default function TicketManager({ tableTicket, allTickets }) {
  const [verifySort, setVerifySort] = useState(true)
  const [importantSort, setImportantSort] = useState(false)
  const [sortedTickets, setSortedTickets] = useState(allTickets)

  const toggleImportantSort = () => {
    setImportantSort(!importantSort)
  }

  const toggleVerifySort = () => {
    setVerifySort(!verifySort)
  }

  const sortTickets = () => {
    let sortable = [...allTickets]

    if (verifySort) sortable = sortable.filter(ticket => ticket.realEmail)
    if (importantSort) sortable = sortable.filter(ticket => ticket.important)

    setSortedTickets(sortable)
  }

  return (
    <Box sx={{ backgroundColor: 'lightblue' }}>
      <Typography variant='h4'>View tickets</Typography>

      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
        <Typography>Sort by:</Typography>
        <Button
          onClick={() => {
            toggleVerifySort()
          }}
        >
          Verified Email
        </Button>
        <Button
          onClick={() => {
            toggleImportantSort()
          }}
        >
          Important
        </Button>
        <Button
          onClick={() => {
            sortTickets()
          }}
        >
          Sort Tickets
        </Button>
      </Box>

      <Ticket
        ticket={tableTicket}
        table={true}
        verifySort={verifySort}
        importantSort={importantSort}
        sx={{ position: 'sticky', top: '10px' }}
      />

      <Stack spacing={1} sx={{}}>
        {sortedTickets &&
          sortedTickets.map((ticket, i) => {
            return <Ticket key={i} ticket={ticket} />
          })}
      </Stack>
    </Box>
  )
}
