import { Box, Container } from '@mui/material'
import React from 'react'
import Congregations from '../../../public/assets/messianic-times/Congregations.webp'
import MessianicCongregations from '../../../public/assets/page-titles/MessianicCongregations 1.webp'
import Image from 'next/image'
import PageTitle from '../../../components/PageHeader/PageTitle'
import SearchBar from './SearchBar'
import { countries, states } from './pageInfo'
export default function page() {
  return (
    <>
      <PageTitle img={MessianicCongregations} />
      <Container sx={{ width: '100%', backgroundColor: ' white' }}>
        <Box>
          <SearchBar countries={countries} states={states} />
        </Box>
        <Box
          maxWidth={1350}
          width='90%'
          margin='auto'
          sx={{ backgroundColor: 'white', py: 3 }}
        >
          <Image
            src={Congregations.src}
            width={Congregations.width}
            height={Congregations.height}
            priority
            alt='many Congregations to follow'
            layout='responsive'
          />
        </Box>
      </Container>
    </>
  )
}
