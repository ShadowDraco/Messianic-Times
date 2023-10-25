import React from 'react'

import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import AdvertLoader from './AdvertLoader'
import Collage2 from '../../../public/assets/adverts/Collage2.webp'

export default function page() {
  return (
    <Box
      sx={{
        margin: 'auto',
        my: 2,
        py: 2,

        maxWidth: 1300,
      }}
    >
      <Typography variant='h3' textAlign={'center'} mb={3} color='white'>
        {' '}
        Support Our Advertisers!
      </Typography>

      <AdvertLoader />
    </Box>
  )
}
