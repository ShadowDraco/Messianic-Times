'use client'
import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Image from 'next/image'
import Link from 'next/link'
import CelebratingFaithPreview from '../../../../public/assets/faith-images/CelebratingFaithPreview.webp'
import { useWindowContext } from '../../../Providers'
import PageTitle from '../../../../components/PageHeader/PageTitle'
export default function page() {
  const { timesWidth, timesHeight } = useWindowContext()
  return (
    <>
      <PageTitle
        title="This issue's Celebrating our Faith"
        /*img={SharingOurFaith}
        width={timesWidth}
        height={timesHeight}*/
      />
      <Box
        sx={{
          width: '100%',
          margin: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box>
          <Image
            src={CelebratingFaithPreview.src}
            width={timesWidth * 0.8}
            height={timesHeight * 2}
            layout='responsive'
            alt={'preview of Celebrating our Faith page'}
            priority
          />

          <Link href='/products'>
            <Button color='info'>Full Story?</Button>
          </Link>
        </Box>
      </Box>
    </>
  )
}
