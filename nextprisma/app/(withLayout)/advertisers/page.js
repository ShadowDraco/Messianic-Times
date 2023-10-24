import React from 'react'

import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import AdvertLoader from './AdvertLoader'
import Collage2 from '../../../public/assets/adverts/Collage2.jpg'

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

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          paddingY: 2,
          flexWrap: 'wrap',
        }}
      >
        {/*{ads.map((ad, i) => {
          return (
            <Link href={ad.url} target='_blank' key={i}>
              <Image
                src={ad.img.src}
                width={250}
                height={250}
                layout='responsive'
                alt='advertiser banner'
                style={{ maxWidth: 350, maxHeight: 350 }}
                priority
              />
            </Link>
          )
        })}*/}
      </Box>
      <AdvertLoader />
    </Box>
  )
}
