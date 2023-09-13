'use client'
import React, { useRef } from 'react'
import dynamic from 'next/dynamic'
import { Box, Button } from '@mui/material'
import Image from 'next/image'
import timesArt from '../../public/assets/timesArt.png'
import SharingFaith from '../../public/assets/SharingFaith.png'
import CelebratingFaith from '../../public/assets/CelebratingFaith.png'
import IntersectingFaith from '../../public/assets/IntersectingFaith.png'
import CommunityFaith from '../../public/assets/CommunityFaith.png'
import SyncedBreath from '../motion/breath/SyncedBreath'
import AudioPlayer from '../../components/audio/AudioPlayer'
export default function MainHeader() {
  const audioRef = useRef(null)

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex ',
        justifyContent: 'center',
        flexDirection: 'column',
        mb: 3,
      }}
    >
      <Image
        src={timesArt.src}
        width={timesArt.width}
        height={timesArt.height}
        alt='Messianic Times Art'
        priority
        style={{ marginBottom: 5 }}
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
        <SyncedBreath>
          <Image
            src={SharingFaith.src}
            width={100}
            height={100}
            alt={'Sharing Faith link'}
          />
        </SyncedBreath>
        <SyncedBreath>
          <Image
            src={CelebratingFaith.src}
            width={100}
            height={100}
            alt={'Celebrating Faith link'}
          />
        </SyncedBreath>
        <SyncedBreath>
          <Image
            src={IntersectingFaith.src}
            width={100}
            height={100}
            alt={'Intersecting Faith link'}
          />
        </SyncedBreath>
        <SyncedBreath>
          <Image
            src={CommunityFaith.src}
            width={100}
            height={100}
            alt={'Community Faith link'}
          />
        </SyncedBreath>
      </Box>

      <AudioPlayer ref={audioRef} />
    </Box>
  )
}
