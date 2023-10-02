import React from 'react'

import PaperViewer from './PaperViewer'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../api/auth/[...nextauth]/route'
import { Container, Typography, Box, Button } from '@mui/material'
import Link from 'next/link'

export default async function page() {
  const session = await getServerSession(authOptions)
  if (!session)
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
            You are not logged in
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
            <Link href='/products'>
              <Button variant='contained'>Subscribe now!</Button>
            </Link>
          </Box>
        </Box>
      </Container>
    )

  return <PaperViewer />
}
