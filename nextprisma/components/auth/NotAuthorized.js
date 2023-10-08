import React from 'react'
import { Container, Typography, Box, Button } from '@mui/material'
import Link from 'next/link'

export default function NotAuthorized() {
  return (
    <Container
      sx={{
        my: 4,
        width: '100%',
        height: '100%',
      }}
    >
      <Box margin='auto' width='50%' textAlign='center'>
        <Typography variant='h4' color='white'>
          {' '}
          You are not authorized to view this page
        </Typography>
        <Box
          sx={{
            my: 5,
            display: 'flex',
            justifyContent: 'space-evenly',
            gap: 3,
            alignItems: 'center',
          }}
        >
          <Link href='/api/auth/signin'>
            <Button variant='contained' sx={{ my: 2 }}>
              Sign in
            </Button>
          </Link>
          <Link href='/'>
            <Button variant='contained'>Home page</Button>
          </Link>
        </Box>
      </Box>
    </Container>
  )
}