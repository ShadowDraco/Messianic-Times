'use client'
import { useState, useEffect } from 'react'
import { useWindowContext } from '../../app/Providers'
import React from 'react'
import Link from 'next/link'
import Box from '@mui/material/Box'
import LargeButtons from './NavButtons/LargeButtons'

import FaithImages from './FaithImages/FaithImages'
import Image from 'next/image'
import timesArt from '../../public/assets/messianic-times/timesArt2.webp'

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
        width: '99%',
        mx: 1,
        textAlign: 'center',
        backgroundColor: 'rgb(24, 46, 66)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '1350px',
          margin: 'auto',
          my: 0,
        }}
      >
       
          <Link href={'/'}>
            <Image
              src={timesArt.src}
              width={timesWidth}
              height={timesHeight}
              alt='Messianic Times Art'
              layout='responsive'
              priority
              style={{ maxWidth: '1350px', margin: 'auto', my: 0 }}
            />
          </Link>
        
      </Box>

      {/*//? Faith Images */}
      
        <Box
          sx={{
            display: 'flex',
            justifyContent: spaceType,

            paddingY: 1,
            maxWidth: '1350px',
            margin: 'auto',
            width: '100%',
            my: 0,
          }}
        >
          <FaithImages size={timesWidth} />
        </Box>
      {/*//? Nav Buttons */}
      <Box
        sx={{
          backgroundColor: '#0D99FF',
          display: 'flex',
          justifyContent: 'space-between',
          padding: 1,
          maxWidth: '1330px',
          margin: 'auto',
        }}
      >
        <LargeButtons />
      </Box>
    </Box>
  )
}
