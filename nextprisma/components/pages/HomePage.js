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
      <Box sx={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
        <Typography
          variant='h3'
          component='h3'
          my={3}
        >
          Hello{session?.user?.name ? ` ${session.user.name}` : ', please log in'}{' '}
        </Typography>

        <Link href='https://donate.stripe.com/test_6oEcQG1oM0hHd2M144'>
          <Button
            size='large'
            variant='contained'
            sx={{mr: 8}}
          >
            Donate
          </Button>
        </Link>
      </Box>

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
