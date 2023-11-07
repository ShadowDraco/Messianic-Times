import React from 'react'
import { Container } from '@mui/material'
import BasicCreateUserForm from '../../../components/auth/BasicCreateUserForm'
export default function page() {
  return (
    <Container
      sx={{
        backgroundColor: 'white',
        my: 2,
        py: 2,
        width: '100%',
        maxWidth: '1300px',
      }}
    >
      <BasicCreateUserForm />
    </Container>
  )
}
