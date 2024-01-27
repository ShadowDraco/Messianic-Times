'use client'
import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import BreathWrapper from '../../components/motion/breath/BreathWrapper'
import Image from 'next/image'
import Adverts from './Adverts'
import Adverts2 from './Adverts2'
import LatestIssue from '../../public/assets/previews/LatestIssue.webp'
import LatestPreview from '../../public/assets/previews/LatestPreview.webp'
import { useWindowContext } from '../Providers'
import Link from 'next/link'
import LitePlayer from '../../components/videoPlayer/LitePlayer'

export default function MainPage({ session }) {
  const { timesWidth, timesHeight } = useWindowContext()

  return (
    <>
      <Box my={2} pt={3}>
        <Typography
          variant='h3'
          color='black'
          fontWeight={'bold'}
          textAlign={'center'}
        >
          <BreathWrapper>January / February 2024 Issue!</BreathWrapper>
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          paddingBottom: 2,
        }}
      >
        {/* <Link href='/read'>
          <Image
            src={LatestIssue.src}
            width={timesWidth}
            height={timesHeight}
            layout='responsive'
            priority
            style={{ maxWidth: '300px' }}
            alt='Contents of latest issue'
          />
        </Link>*/}

        {/*<Link href='/advertisers' style={{ textDecoration: 'none' }}>
            <Typography
              variant='h4'
              color='white'
              fontWeight={'bold'}
              textAlign={'center'}
              paddingBottom={2}
            >
              Visit our Advertisers
            </Typography>
          </Link>*/}

        {/*<Adverts timesWidth={timesWidth} timesHeight={timesHeight} />
         */}

        <Link href='/read'>
          <Image
            src={LatestPreview.src}
            width={timesWidth}
            height={timesHeight}
            priority
            layout='responsive'
            style={{ maxWidth: timesWidth > 1000 ? '900px' : '700px' }}
            alt='Preview of latest issue'
          />
        </Link>
      </Box>

      <Box sx={{ paddingY: 3, backgroundColor: '#0D99FF' }}></Box>
    </>
  )
}
