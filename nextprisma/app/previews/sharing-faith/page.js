'use client'
import React from 'react'
import { Box, Button } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import SharingOurFaith from '../../../public/assets/SharingOurFaith.png'
import SharingOurFaithPreview from '../../../public/assets/SharingOurFaithPreview.png'
import { useWindowContext } from '../../Providers'
import PageTitle from '../../../components/PageHeader/PageTitle'
export default function page() {
  const { timesWidth, timesHeight } = useWindowContext()
  return (
    <>
      <PageTitle
        title="This issue's Sharing our faith"
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
            src={SharingOurFaithPreview.src}
            width={timesWidth * 0.8}
            height={timesHeight * 2}
            alt={'preview of sharing our faith page'}
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
