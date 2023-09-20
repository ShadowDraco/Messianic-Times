'use client'
import { useState, useEffect } from 'react'
import { useWindowContext } from '../../app/Providers'
import React from 'react'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import LargeButtons from './NavButtons/LargeButtons'
import SmallButtons from './NavButtons/SmallButtons'
import FaithImages from './FaithImages/FaithImages'
import Image from 'next/image'
import timesArt from '../../public/assets/messianic-times/timesArt.webp'
import { m } from 'framer-motion'

export default function MainHeader() {
  const { timesWidth, timesHeight } = useWindowContext()
  const [spaceType, setSpaceType] = useState('space-between')
  useEffect(() => {
    if (timesWidth < 500) {
      setSpaceType('space-evenly')
    } else {
      setSpaceType('space-between')
    }
  }, [timesWidth])
  return (
    <Box
      className='MainHeaderWrapper'
      sx={{
        width: '100%',
        textAlign: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '1350px',
          margin: 'auto',
        }}
      >
        <m.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Link href={'/'}>
            <Image
              src={timesArt.src}
              width={timesWidth}
              height={timesHeight}
              alt='Messianic Times Art'
              layout='responsive'
              priority
              style={{ marginBottom: 5, maxWidth: '1350px', margin: 'auto' }}
            />
          </Link>
        </m.div>
      </Box>

      {/*//? Faith Images */}
      <m.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: spaceType,

            paddingY: 1,
            maxWidth: '1350px',
            margin: 'auto',
            width: '100%',
          }}
        >
          <FaithImages size={timesWidth} />
        </Box>
      </m.div>

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
          maxWidth: '1330px',
          margin: 'auto',
        }}
      >
        <SmallButtons />
      </Box>
    </Box>
  )
}
