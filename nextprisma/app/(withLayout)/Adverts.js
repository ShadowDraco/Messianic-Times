import React from 'react'
import University from '../../public/assets/adverts/University.webp'
import MJAA from '../../public/assets/adverts/MJAA.webp'
import ArielBanner from '../../public/assets/adverts/ArielBanner.webp'
import { Box } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
export default function Adverts({ timesWidth, timesHeight }) {
  return (
    <>
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          justifyContent: 'space-evenly',
          paddingY: 2,
          flexWrap: 'wrap',
        }}
      >
        <Link href='https://www.tku.edu/' target='_blank'>
          <Image
            src={University.src}
            width={timesWidth / 4}
            height={timesWidth / 5}
            alt='Kings University'
            style={{ maxWidth: 350, maxHeight: 250 }}
            priority
          />
        </Link>
        <Link href='https://www.arielcollege.com/' target='_blank'>
          <Image
            src={ArielBanner.src}
            width={timesWidth / 2}
            height={timesWidth / 3}
            alt='Ariel College'
            style={{ maxWidth: 350, maxHeight: 250 }}
            priority
          />
        </Link>
        <Link href='https://mjaa.org' target='_blank'>
          <Image
            src={MJAA.src}
            width={timesWidth / 4}
            height={timesWidth / 5}
            alt='MJAA'
            priority
            style={{ maxWidth: 350, maxHeight: 250 }}
          />
        </Link>
      </Box>

      <Box
        sx={{
          display: { xs: 'flex', md: 'none' },
          justifyContent: 'space-evenly',
          paddingY: 2,
          flexWrap: 'wrap',
        }}
      >
        <Link href='https://www.tku.edu/' target='_blank'>
          <Image
            src={University.src}
            width={timesWidth / 4}
            height={timesWidth / 5}
            alt='Kings University'
            style={{ maxWidth: 350, maxHeight: 250 }}
            priority
          />
        </Link>
        <Link href='https://www.arielcollege.com/' target='_blank'>
          <Image
            src={ArielBanner.src}
            width={timesWidth / 4}
            height={timesWidth / 5}
            alt='Ariel College'
            style={{ maxWidth: 350, maxHeight: 250 }}
            priority
          />
        </Link>
        <Link href='https://mjaa.org' target='_blank'>
          <Image
            src={MJAA.src}
            width={timesWidth / 4}
            height={timesWidth / 5}
            alt='MJAA'
            priority
            style={{ maxWidth: 350, maxHeight: 250 }}
          />
        </Link>
      </Box>
    </>
  )
}
