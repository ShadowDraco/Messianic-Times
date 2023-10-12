import React from 'react'
import University from '../../public/assets/adverts/University.webp'
import MJAA from '../../public/assets/adverts/MJAA.webp'
import ArielBanner from '../../public/assets/adverts/ArielBanner.webp'
import MJPR from '../../public/assets/adverts/MJPR.webp'
import Ariel from '../../public/assets/adverts/ariel-ad.webp'
import { Box } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
export default function Adverts({ timesWidth, timesHeight }) {
  const imageSize = 5.5
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          paddingY: 2,
          flexWrap: 'wrap',
        }}
      >
        <Link href='https://www.tku.edu/' target='_blank'>
          <Image
            src={University.src}
            width={timesWidth / imageSize}
            height={timesWidth / imageSize}
            alt='Kings University'
            style={{ maxWidth: 350, maxHeight: 250 }}
            priority
          />
        </Link>
        <Link href='https://www.arielcollege.com/' target='_blank'>
          <Image
            src={ArielBanner.src}
            width={timesWidth / imageSize}
            height={timesWidth / imageSize}
            alt='Ariel College'
            style={{ maxWidth: 350, maxHeight: 250 }}
            priority
          />
        </Link>

        <Link href='https://mjaa.org' target='_blank'>
          <Image
            src={MJAA.src}
            width={timesWidth / imageSize}
            height={timesWidth / imageSize}
            alt='MJAA'
            priority
            style={{ maxWidth: 350, maxHeight: 250 }}
          />
        </Link>
        <Link href='https://www.ariel.org/' target='_blank'>
          <Image
            src={Ariel.src}
            width={timesWidth / imageSize}
            height={timesWidth / imageSize}
            alt='Ariel Ministries'
            style={{ maxWidth: 350, maxHeight: 250 }}
            priority
          />
        </Link>
        <Link href='https://www.messianicjewish.net/' target='_blank'>
          <Image
            src={MJPR.src}
            width={timesWidth / imageSize}
            height={timesWidth / imageSize}
            alt='Messianic Jewish Publishers and Resources'
            priority
            style={{ maxWidth: 350, maxHeight: 250 }}
          />
        </Link>
      </Box>
    </>
  )
}
