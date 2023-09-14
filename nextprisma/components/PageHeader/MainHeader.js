'use client'
import { useWindowContext } from '../../app/Providers'
import React from 'react'

import { Box, Typography, Skeleton } from '@mui/material'
import LargeButtons from './NavButtons/LargeButtons'
import SmallButtons from './NavButtons/SmallButtons'
import FaithImages from './FaithImages/FaithImages'
import Image from 'next/image'
import timesArt from '../../public/assets/timesArt.png'

export default function MainHeader() {
  const { timesWidth, timesHeight } = useWindowContext()

  return timesWidth !== 100 ? (
    <Box
      sx={{
        width: '100%',
        textAlign: 'center',
      }}
    >
      <Box
        sx={{
          margin: 'auto',
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '1350px',
          backgroundColor: '#26C8F4',
        }}
      >
        <Image
          src={timesArt.src}
          width={timesWidth}
          height={timesHeight}
          alt='Messianic Times Art'
          priority
          style={{ marginBottom: 5 }}
        />
      </Box>

      {/*//? Faith Images */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingY: 1,
          maxWidth: '1350px',
          margin: 'auto',
        }}
      >
        <FaithImages size={timesWidth} />
      </Box>

      {/*//? Nav Buttons */}
      <Box
        sx={{
          backgroundColor: '#3499D9',
          display: 'flex',
          justifyContent: 'space-between',
          padding: 1,
          display: { xs: 'none', md: 'flex' },
          maxWidth: '1330px',
          margin: 'auto',
        }}
      >
        <LargeButtons />
      </Box>
      <Box
        sx={{
          backgroundColor: '#3499D9',
          display: 'flex',
          justifyContent: 'space-evenly',
          paddingY: 1,
          display: { xs: 'flex', md: 'none' },
          maxWidth: '1350px',
          margin: 'auto',
        }}
      >
        <SmallButtons />
      </Box>

      {/*//? Page Title */}
      <Box
        sx={{
          width: '100%',
          paddingY: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '1350px',
          margin: 'auto',
        }}
      >
        <Typography
          variant='h4'
          fontWeight={'bold'}
          color='whitesmoke'
          textAlign={'center'}
          maxWidth='1350px'
          margin='auto'
        >
          The leading Messianic Newspaper since 1990
        </Typography>
      </Box>
    </Box>
  ) : (
    <Skeleton variant='rectangular' width='2000' height='500'></Skeleton>
  )
}
