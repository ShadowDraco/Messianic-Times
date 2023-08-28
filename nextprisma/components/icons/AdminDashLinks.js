'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { UTurnLeft, Table, Pay, Users } from '../icons/Icons';

export default function AdminDashLinks() {
  return (
    <Box className='flex gap-2'>
      <Link href='/'>
        <Box className='hidden md:flex items-center gap-2 mx-2 p-3 text-[#faaa55]'>
          <Typography>Go To Website</Typography>
          <UTurnLeft />
        </Box>
      </Link>

      <Link
        href='https://www.sanity.io/manage'
        className=''
        target='_blank'
      >
        <Box className='hidden md:flex items-center gap-2 mx-2 p-3 text-[#faaa55]'>
          <Typography>Sanity Dashboard</Typography>
          <Table />
        </Box>
      </Link>

      <Link
        href='https://dashboard.stripe.com/test/dashboard'
        className=''
        target='_blank'
      >
        <Box className='hidden md:flex items-center gap-2 mx-2 p-3 text-[#faaa55]'>
          <Typography>Stripe Dashboard</Typography>
          <Pay />
        </Box>
      </Link>

      <Link
        href={
          process.env.USER_DASHBOARD_URL ||
          'https://cloud.prisma.io/ShadowDraco/pre-messianic-times/production/databrowser'
        }
        className=''
        target='_blank'
      >
        <Box className='hidden md:flex items-center gap-2 mx-2 p-3 text-[#faaa55]'>
          <Typography>User Dashboard</Typography>
          <Users />
        </Box>
      </Link>
    </Box>
  );
}
