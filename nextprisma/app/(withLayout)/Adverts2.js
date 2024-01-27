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
          paddingY: 2,
        }}
      >
        <Link href='https://www.ariel.org/' target='_blank'>
          <Image
            src={Ariel.src}
            width={timesWidth / imageSize}
            height={timesWidth / imageSize}
            alt='Ariel Ministries'
            style={{ maxWidth: 200, maxHeight: 200 }}
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
            style={{ maxWidth: 200, maxHeight: 200 }}
          />
        </Link>
        <Link href='https://www.arielcollege.com/' target='_blank'>
          <Image
            src={ArielBanner.src}
            width={timesWidth / imageSize}
            height={timesWidth / imageSize}
            alt='Ariel College'
            style={{ maxWidth: 200, maxHeight: 200 }}
            priority
          />
        </Link>
        <Link href='https://www.cmj-usa.org/' target='_blank'>
          <Image
            src={CMJ.src}
            width={timesWidth / imageSize}
            height={timesWidth / imageSize}
            alt='CMJ USA'
            style={{ maxWidth: 200, maxHeight: 200 }}
            priority
          />
        </Link>
      </Box>
    </>
  )
}
