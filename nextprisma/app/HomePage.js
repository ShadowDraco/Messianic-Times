'use client';
import { Box, Container, Button, Typography, Input } from '@mui/material';
import Link from 'next/link';
import AuthButtons from '../components/auth/AuthButtons';
import BasicDeleteUserForm from '../components/auth/BasicDeleteUserForm';
import BasicCreateUserForm from '../components/auth/BasicCreateUserForm';
import { Paper, Shop, Book, At, Heart, Table } from '../components/icons/Icons';
import AdminDashLinks from '../components/icons/AdminDashLinks';
import BreathWrapper from '../components/motion/breath/BreathWrapper';
export default function HomePage({ session }) {
 
  return (
    <Box className={'text-[#211] bg-[#B5DBFF] mt-0 p-3'}>
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}
      >
        <Typography
          variant='h3'
          component='h3'
          my={3}
        >
          Hello
          {session?.user?.name
            ? ` ${session.user.name}`
            : ', please log in'}{' '}
        </Typography>
        <Link
          href='/donate'
          style={{ width: 'fit-content' }}
        >
          <BreathWrapper>
            <Button
              size='large'
              variant='contained'
              sx={{ mr: 8 }}
              endIcon={<Heart />}
            >
              Donate
            </Button>
          </BreathWrapper>
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
            endIcon={<Table />}
          >
            Studio
          </Button>
        </Link>
        <Link href='/posts'>
          <Button
            variant='outlined'
            color='warning'
            endIcon={<Paper />}
          >
            Posts
          </Button>
        </Link>
        <Link href='/read'>
          <Button
            variant='outlined'
            color='primary'
            endIcon={<Book />}
          >
            Read
          </Button>
        </Link>
        <Link href='/about'>
          <Button
            variant='outlined'
            color='error'
            endIcon={<At />}
          >
            About
          </Button>
        </Link>
      </Container>
      <Box className='bg-[#002540]'>
        <AdminDashLinks />
      </Box>
    </Box>
  );
}
