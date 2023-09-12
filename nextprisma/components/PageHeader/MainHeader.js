'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import { Box, Button } from '@mui/material'
import Image from 'next/image'
import timesArt from '../../public/assets/timesArt.png'
import SharingFaith from '../../public/assets/SharingFaith.png'
import CelebratingFaith from '../../public/assets/CelebratingFaith.png'
import IntersetingFaith from '../../public/assets/IntersectingFaith.png'
import CommunityFaith from '../../public/assets/CommunityFaith.png'
import BreathWrapper from '../motion/breath/BreathWrapper'
export default function MainHeader() {
  const AudioPlayer = dynamic(() => import('../audio/AudioPlayer'))

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex ',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Image
        src={timesArt.src}
        width={timesArt.width}
        height={timesArt.height}
        alt='Messianic Times Art'
        priority
      />
      <Box display={'flex'} justifyContent={'space-evenly'}>
        <Button size='large' variant='contained' color='error'>
          Home
        </Button>
        <Button size='large' variant='contained' color='error'>
          About Us
        </Button>
        <Button size='large' variant='contained' color='error'>
          Advertising
        </Button>
        <Button size='large' variant='contained' color='error'>
          Get Involved
        </Button>
        <Button size='large' variant='contained' color='error'>
          something
        </Button>
      </Box>

      <Box display={'flex'} justifyContent={'space-evenly'}>
        <BreathWrapper>
          <Image
            src={SharingFaith.src}
            width={SharingFaith.width}
            height={SharingFaith.width}
            alt={'Sharing Faith link'}
          />
        </BreathWrapper>
      </Box>
      <AudioPlayer />
    </Box>
  )
}
