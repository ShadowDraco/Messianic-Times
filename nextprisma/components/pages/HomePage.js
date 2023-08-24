'use client';
import { Box, Container, Button, Typography, Input } from '@mui/material';
import Link from 'next/link';
import AuthButtons from '../auth/AuthButtons';
import BasicDeleteUserForm from '../auth/BasicDeleteUserForm';
import BasicCreateUserForm from '../auth/BasicCreateUserForm';
import { Paper, Shop } from '../icons/Icons';
import AdminDashLinks from '../icons/AdminDashLinks';

export default function HomePage({ session }) {
  return (
    <Box className={'text-[#211] bg-[#B5DBFF] mt-0 p-3'}>
      <Typography
        variant='h3'
        component='h3'
        my={3}
      >
        Hello{session.user?.name ? ` ${session.user.name}` : ', please log in'}{' '}
      </Typography>

      <Container className='py-2 my-2'>
        <BasicDeleteUserForm />

        <BasicCreateUserForm />
      </Container>

      <Container className={'flex gap-2 my-2 py-2'}>
        <AuthButtons />
        <Link href='/products'>
          <Button
            variant='outlined'
            color='success'
            endIcon={<Shop />}
          >
            Products
          </Button>
        </Link>
        <Link href='/studio'>
          <Button
            variant='outlined'
            color='primary'
            endIcon={<Paper />}
          >
            Studio
          </Button>
        </Link>
      </Container>
      <Box className='bg-[#002540]'>
        <AdminDashLinks />
      </Box>
    </Box>
  );
}
