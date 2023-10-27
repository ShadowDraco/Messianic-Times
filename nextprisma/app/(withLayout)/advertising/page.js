import React from 'react'
import Image from 'next/image'
import Collage2 from '../../../public/assets/adverts/Collage2.webp'
import { Box, Container, Typography } from '@mui/material'
import Link from 'next/link'
export default function page() {
  return (
    <Container sx={{ my: 2 }}>
      <Typography
        variant='h2'
        fontWeight={'bold'}
        color='gold'
        textAlign={'center'}
      >
        Your Ad Could Be Here!
      </Typography>
      <Box sx={{ my: 2, display: 'flex', justifyContent: 'center' }}>
        {' '}
        <Image
          src={Collage2.src}
          width={Collage2.width}
          height={Collage2.height}
          alt={'Some of our advertisers'}
          layout={'responsive'}
          priority
        />
      </Box>

      
        <Link
          href='mailto:advertising@messianictimes.com'
          sx={{ textDecoration: 'none' }}
        >
          {' '}
          <Typography
            variant='h4'
            fontWeight={'bold'}
            color='white'
            textAlign={'center'}
          >
            advertising@messianictimes.com
          </Typography>
        </Link>
     
    </Container>
  )
}
