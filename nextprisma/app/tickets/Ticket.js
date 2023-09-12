import React from 'react'
import {
  Container,
  Box,
  Typography,
  Button,
  IconButton,
  LoadingButton,
} from '@mui/material'
import BorderBox from '../../components/Ticket/BorderBox'

export default function Ticket({ ticket }) {
  return (
    <Container
      sx={{ display: 'flex', gap:1, paddingY: 2, backgroundColor: 'wheat' }}
    >
      <BorderBox sx={{ border: '2px groove black', paddingX: 1, paddingY: 2 }}>
        {ticket.realEmail === true ? 'Yes' : 'No'}
      </BorderBox>
      <BorderBox>{ticket.important === true? 'YES' : 'no'}</BorderBox>
      <BorderBox med>{ticket.title}</BorderBox>
      <BorderBox wide>{ticket.description}</BorderBox>
      <BorderBox med>{ticket.email}</BorderBox>
      <BorderBox>{ticket.name}</BorderBox>
    </Container>
  )
}
