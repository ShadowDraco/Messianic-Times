import React from 'react'
import MJPR from '../../../public/assets/adverts/MJPR.webp'
import University from '../../../public/assets/adverts/University.webp'
import MJAA from '../../../public/assets/adverts/MJAA.webp'
import ArielBanner from '../../../public/assets/adverts/ArielBanner.webp'
import Link from 'next/link'
import Image from 'next/image'
import { Container, Box, Typography, Stack } from '@mui/material'
import AdvertLoader from './AdvertLoader'

const ads = [
  { url: 'https://www.arielcollege.com/', img: ArielBanner },
  { url: 'https://tku.edu', img: University },
  { url: 'https://mjaa.org', img: MJAA },
  { url: 'https://www.messianicjewish.net/', img: MJPR },
]
export default function page() {
  return (
    <Box
      sx={{
        margin: 'auto',
        my: 2,
        py: 2,
        width: '100%',
        maxWidth: 1300,
      }}
    >
      <Typography variant='h3' textAlign={'center'} mb={3} color='white'>
        {' '}
        Meet Our Advertisers!
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
