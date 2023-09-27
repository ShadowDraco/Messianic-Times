import React from 'react'
import { Box, Typography } from '@mui/material'
import BorderBox from '../../components/Ticket/BorderBox'

export default function Ticket({
  ticket,
  verifySort,
  importantSort,
  table = false,
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1,
        paddingY: 2,
        backgroundColor: 'rgba(200,200,200,0.5)',
        maxHeight: '12em',
        overflowY: 'scroll',
        border: '3px black groove',
        position: table ? 'sticky' : 'unset',
      }}
    >
      <BorderBox sx={{ border: '2px groove black', paddingX: 1, paddingY: 2 }}>
        <Typography color={verifySort ? 'green' : 'black'}>
          {table ? 'Verified' : ticket.realEmail === true ? 'Yes' : 'No'}
        </Typography>
      </BorderBox>
      <BorderBox>
        <Typography color={importantSort ? 'green' : 'black'}>
          {table ? 'ASAP' : ticket.important === true ? 'YES' : 'no'}
        </Typography>
      </BorderBox>
      <BorderBox wide>
        <Typography>{ticket.title}</Typography>
      </BorderBox>
      <BorderBox wide>
        <Typography>{ticket.description}</Typography>
      </BorderBox>
      <BorderBox med overflowX='scroll' table={table}>
        <Typography>{ticket.email}</Typography>
      </BorderBox>
      <BorderBox med>
        <Typography>{ticket.name}</Typography>
      </BorderBox>
    </Box>
  )
}
