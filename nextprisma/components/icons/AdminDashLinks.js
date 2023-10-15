import React from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Link from 'next/link'
import {
  UTurnLeft,
  Table,
  Pay,
  Users,
  Star,
  At,
} from '../icons/Icons'

export default function AdminDashLinks() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
      }}
    >
      <Link href='/studio'>
        <Button endIcon={<Star />}>Studio</Button>
      </Link>
      <Link href='/tickets'>
        <Button endIcon={<At />}>Tickets</Button>
      </Link>

      <Link href='https://www.sanity.io/manage' className='' target='_blank'>
        <Button endIcon={<Table />}>Sanity</Button>
      </Link>

      <Link
        href='https://dashboard.stripe.com/test/dashboard'
        className=''
        target='_blank'
      >
        <Button endIcon={<Pay />}>Stripe</Button>
      </Link>

      <Link
        href={
          process.env.USER_DASHBOARD_URL ||
          'https://cloud.prisma.io/ShadowDraco/pre-messianic-times/production/databrowser'
        }
        className=''
        target='_blank'
      >
        <Button endIcon={<Users />}>Database</Button>
      </Link>
      <Link href='/'>
        <Button endIcon={<UTurnLeft />}>Website</Button>
      </Link>
    </Box>
  )
}
