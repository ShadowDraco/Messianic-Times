import React from 'react'
import MJPRBanner from '../../../public/assets/adverts/MJPRBanner.webp'
import University from '../../../public/assets/adverts/University.webp'
import MJAA from '../../../public/assets/adverts/MJAA.webp'
import ArielBanner from '../../../public/assets/adverts/ArielBanner.webp'
import Link from 'next/link'
import Image from 'next/image'
import { Container, Box, Typography, Stack } from '@mui/material'

const ads = [
  { url: 'https://www.arielcollege.com/', img: ArielBanner },
  { url: 'https://tku.edu', img: University },
  { url: 'https://mjaa.org', img: MJAA },
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
      <Box sx={{ backgroundColor: '' }}>
        <Link href='https://www.messianicjewish.net/' target='_blank'>
          <Image
            src={MJPRBanner.src}
            width={MJPRBanner.width}
            height={MJPRBanner.height}
            layout='responsive'
            alt='Messianic Jewish Publications'
            priority
          />
        </Link>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          paddingY: 2,
          flexWrap: 'wrap',
        }}
      >
        {ads.map((ad, i) => {
          return (
            <Link href={ad.url} target='_blank' key={i}>
              <Image
                src={ad.img.src}
                width={500}
                height={500}
                layout='responsive'
                alt='advertiser banner'
                style={{ maxWidth: 350, maxHeight: 250 }}
                priority
              />
            </Link>
          )
        })}
      </Box>
    </Box>
  )
}
