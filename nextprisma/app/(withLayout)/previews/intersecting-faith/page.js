'use client'
import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Image from 'next/image'
import Link from 'next/link'
import IntersectingFaithPreview from '../../../../public/assets/faith-images/IntersectingFaithPreview.webp'
import { useWindowContext } from '../../../Providers'
import PageTitle from '../../../../components/PageHeader/PageTitle'
export default function page() {
  const { timesWidth, timesHeight } = useWindowContext()
  return (
    <>
      <PageTitle
        title="This issue's Intersecting Faith"
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
            src={IntersectingFaithPreview.src}
            width={timesWidth * 0.8}
            height={timesHeight * 2}
            layout='responsive'
            alt={'Preview of Intersecting Faith page'}
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
