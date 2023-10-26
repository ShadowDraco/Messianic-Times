import React from 'react'
import Link from 'next/link'
import Box from '@mui/material/Box'
import LargeButtons from './NavButtons/LargeButtons'

import FaithImages from './FaithImages/FaithImages'
import Image from 'next/image'
import timesArt from '../../public/assets/messianic-times/timesArt2.webp'

export default function MainHeader() {
  return (
    <Box
      className='MainHeaderWrapper'
      sx={{
        width: '100%',
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
            width={1350}
            height={300}
            alt='Messianic Times Art'
            layout='responsive'
            priority={true}
            style={{ maxWidth: '1350px', margin: 'auto', my: 0 }}
          />
        </Link>
      </Box>

      {/*//? Faith Images */}

      <FaithImages />

      {/*//? Nav Buttons */}

      <LargeButtons />
    </Box>
  )
}
