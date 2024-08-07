'use client'
import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import Link from 'next/link'
import EditAccount from './EditAccount'
import Freebies from './Freebies'
import AdminDashLinks from '../../../components/icons/AdminDashLinks'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function page({ isAdmin }) {
  const { data: session, update } = useSession()

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        margin: 'auto',
        py: 2,
        my: 2,
        maxWidth: '1300px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',

          flexWrap: 'wrap',
          textAlign: 'center',
          px: 3,
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

      <Box
        sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}
      >
        <EditAccount session={session} update={update} />

        <Freebies session={session} update={update} />
      </Box>

      <Box sx={{ backgroundColor: '#002540', my: 2 }}>
        {isAdmin && <AdminDashLinks />}
      </Box>
    </Box>
  )
}
