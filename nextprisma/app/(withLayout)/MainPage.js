'use client'
import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import BreathWrapper from '../../components/motion/breath/BreathWrapper'
import Image from 'next/image'
import University from '../../public/assets/adverts/University.webp'
import MJAA from '../../public/assets/adverts/MJAA.webp'

import LatestIssue from '../../public/assets/previews/LatestIssue.webp'
import LatestPreview from '../../public/assets/previews/LatestPreview.webp'
import { useWindowContext } from '../Providers'

export default function MainPage({ session }) {
  const { timesWidth, timesHeight } = useWindowContext()

  return (
    <>
      <Box sx={{ paddingY: 3, backgroundColor: '#0D99FF' }}>
        <Typography
          variant='h4'
          color='white'
          fontWeight={'bold'}
          textAlign={'center'}
          paddingBottom={2}
        >
          Visit our Advertisers
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            paddingY: 2,
          }}
        >
          <Image
            src={University.src}
            width={timesWidth / 4}
            height={timesWidth / 5}
            alt='Kings University'
            style={{ maxWidth: 350, maxHeight: 250 }}
          />
          <Image
            src={MJAA.src}
            width={timesWidth / 4}
            height={timesWidth / 5}
            alt='MJAA'
            style={{ maxWidth: 350, maxHeight: 250 }}
          />
        </Box>
      </Box>

      <Typography
        variant='h4'
        color='black'
        fontWeight={'bold'}
        textAlign={'center'}
        paddingBottom={2}
        marginTop={1}
      >
        <BreathWrapper>Read the latest issue!</BreathWrapper>
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          paddingY: 2,
        }}
      >
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Image
            src={LatestIssue.src}
            width={timesWidth}
            height={timesHeight}
            layout='responsive'
            style={{ maxWidth: '300px' }}
            alt='Contents of latest issue'
          />
        </Box>
        <Image
          src={LatestPreview.src}
          width={timesWidth}
          height={timesHeight}
          layout='responsive'
          style={{ maxWidth: timesWidth > 1000 ? '700px' : '500px' }}
          alt='Preview of latest issue'
        />
      </Box>
    </>
  )
}
