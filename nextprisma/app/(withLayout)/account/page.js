'use client'
import React from 'react'
import { Box, Typography, Container, Button } from '@mui/material'
import Link from 'next/link'
import AuthButtons from '../../../components/auth/AuthButtons'

import BasicDeleteUserForm from '../../../components/auth/BasicDeleteUserForm'
import BasicCreateUserForm from '../../../components/auth/BasicCreateUserForm'
import { Heart } from '../../../components/icons/Icons'
import AdminDashLinks from '../../../components/icons/AdminDashLinks'
import { useSession } from 'next-auth/react'

export default function page() {
  const { data: session, update } = useSession()

  return (
    <Container sx={{ backgroundColor: 'white', margin: 'auto', my: 2 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          flexWrap: 'wrap',
          textAlign: 'center',
        }}
      >
        <Typography variant='h3' component='h3' my={3}>
          Hello
          {session?.user?.name
            ? ` ${session.user.name}`
            : ', please log in'}{' '}
        </Typography>
        <Button
          onClick={() => {
            update({ name: 'John' })
          }}
        >
          Update
        </Button>
      </Box>

      <Container className='py-2 my-2'>
        <BasicDeleteUserForm />

        <BasicCreateUserForm />
      </Container>

      <Container className={'flex gap-2 my-2 py-2'}>
        <AuthButtons />
      </Container>
      <Box className='bg-[#002540]'>
        <AdminDashLinks />
      </Box>
      <Typography sx={{ wordWrap: 'break-word' }}>
        {session?.user ? JSON.stringify(session.user) : 'user not logged in'}
      </Typography>
    </Container>
  )
}
