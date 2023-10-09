import { Box, Container } from '@mui/material'
import React from 'react'
import Congregations from '../../../public/assets/messianic-times/Congregations.webp'
import MessianicCongregations from '../../../public/assets/page-titles/MessianicCongregations 1.webp'
import Image from 'next/image'
import PageTitle from '../../../components/PageHeader/PageTitle'
import SearchArea from './SearchArea'
export default function page() {
  return (
    <>
      <PageTitle img={MessianicCongregations} />

      <Box
        maxWidth={1350}
        width='95%'
        margin='auto'
        sx={{ backgroundColor: 'white', py: 3 }}
      >
        <SearchArea />
      </Box>
    </>
  )
}
