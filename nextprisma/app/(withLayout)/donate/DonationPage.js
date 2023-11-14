import React from 'react'
import { Typography, Box } from '@mui/material'

import StripePayments from './StripePayments'
import DonationPageBackground from '../../../public/assets/messianic-times/DonatePageBackground.webp'

export default function DonationPage() {
  return (
    <Box
      sx={{
        my: 1,
        py: 3,
      }}
      style={{
        backgroundColor: 'white',
        backgroundImage: `url(${DonationPageBackground.src})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <Box sx={{ backgroundColor: '' }}>
        <Typography
          variant='h4'
          component='h1'
          textAlign='center'
          fontWeight={'bold'}
          color='white'
          gutterBottom
        >
          Help us reach the{' '}
          <span
            style={{
              color: 'blue',

              fontWeight: 'bolder',
            }}
          >
            Jewish People
          </span>{' '}
          for the LORD says:{' '}
          <span
            style={{
              color: 'rgb(255, 180, 50)',

              fontWeight: 'bolder',
            }}
          >
            All Israel
          </span>{' '}
          will be saved Romans 11:26
        </Typography>
      </Box>

      <Box sx={{ height: 160 }}></Box>

            <Typography sx={{my: 5}} variant='h4' color='white' textAlign={'center'}>
        The impact of your donation ...
      </Typography>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <StripePayments />
      </Box>
      <Box sx={{ height: 80 }}></Box>
    </Box>
  )
}
