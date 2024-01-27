import React from 'react'
import University from '../../public/assets/adverts/University.webp'
import MJAA from '../../public/assets/adverts/MJAA.webp'
import ArielBanner from '../../public/assets/adverts/ArielBanner.webp'
import MJPR from '../../public/assets/adverts/MJPR.webp'
import IMJA1 from '../../public/assets/adverts/IMJA1.webp'
import Ariel from '../../public/assets/adverts/ariel-ad.webp'
import CMJ from '../../public/assets/adverts/cmj.jpg'
import { Box } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
export default function Adverts({ timesWidth, timesHeight }) {
  const imageSize = 10
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          gap: 5,
          paddingY: 2,
        }}
      >
        <Link href='https://www.tku.edu/' target='_blank'>
          <Image
            src={University.src}
            width={timesWidth / imageSize}
            height={timesWidth / imageSize}
            alt='Kings University'
            style={{ maxWidth: 200, maxHeight: 70 }}
            priority
          />
        </Link>

        <Link href='https://imja.org' target='_blank'>
          <Image
            src={IMJA1.src}
            width={timesWidth / imageSize}
            height={timesWidth / imageSize}
            alt='International Messianic Jewish Alliance'
            priority
            style={{ maxWidth: 200, maxHeight: 70 }}
          />
        </Link>

        <Link href='https://mjaa.org' target='_blank'>
          <Image
            src={MJAA.src}
            width={timesWidth / imageSize}
            height={timesWidth / imageSize}
            alt='MJAA'
            priority
            style={{ maxWidth: 200, maxHeight: 70 }}
          />
        </Link>
      </Box>
    </>
  )
}
