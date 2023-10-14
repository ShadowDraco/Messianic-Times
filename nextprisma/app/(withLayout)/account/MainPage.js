'use client'
import React from 'react'
import { Box, Typography, Container, Button } from '@mui/material'
import Link from 'next/link'
import EditAccount from './EditAccount'
import Freebies from './Freebies'
import AdminDashLinks from '../../../components/icons/AdminDashLinks'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function page({ isAdmin }) {
  const { data: session, update } = useSession()
  console.log(session)
  return (
    <Container sx={{ backgroundColor: 'white', margin: 'auto', py: 2 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          flexWrap: 'wrap',
          textAlign: 'center',
        }}
      >
        <Typography variant='h4' component='h4' my={3}>
          Hello
          {session?.user?.name ? (
            <> {session.user.name} </>
          ) : (
            ', please log in or sign up'
          )}
        </Typography>
        <Button onClick={signOut} size='small' variant='outline'>
          Sign out
        </Button>
      </Box>
      {!session?.user && (
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', mb: 2 }}>
          <Button onClick={signIn} size='large' variant='contained'>
            Log in
          </Button>
          <Link href='/signup'>
            <Button size='large' variant='contained'>
              Sign up!
            </Button>
          </Link>
        </Box>
      )}

      <Box>
        <EditAccount session={session} update={update} />
      </Box>

      <Box>
        <Freebies session={session} update={update} />
      </Box>

      <Box sx={{ backgroundColor: '#002540', my: 2 }}>
        {isAdmin && <AdminDashLinks />}
      </Box>
    </Container>
  )
}
