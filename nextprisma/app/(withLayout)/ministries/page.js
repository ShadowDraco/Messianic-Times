import { Box, Container } from '@mui/material'
import React from 'react'
import Ministries from '../../../public/assets/messianic-times/Ministries.webp'
import MessianicMinistriesWorldWide from '../../../public/assets/page-titles/MessianicMinistriesWorldWide.webp'
import Image from 'next/image'
import PageTitle from '../../../components/PageHeader/PageTitle'
export default function page() {
  return (
    <>
      <PageTitle img={MessianicMinistriesWorldWide} />
      <Container sx={{ width: '100%', backgroundColor: 'white'}}>
        <Box maxWidth={1350} width='90%' margin='auto' py={3}>
          <Image
            src={Ministries.src}
            width={Ministries.width}
            height={Ministries.height}
            alt='many ministries to follow'
            layout='responsive'
          />
        </Box>
      </Container>
    </>
  )
}
