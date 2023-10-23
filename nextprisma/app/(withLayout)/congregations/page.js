import Box from '@mui/material/Box'
import React from 'react'
import MessianicCongregations from '../../../public/assets/page-titles/MessianicCongregations 1.webp'
import PageTitle from '../../../components/PageHeader/PageTitle'
import SearchArea from './SearchArea'
import path from 'path'
import { congregations } from './pageInfo'
import { promises as fs } from 'fs'
const imageDirectory = path.join(process.cwd(), '/public/assets/congregations')
export default async function page() {
  const imageFilenames = await fs.readdir(imageDirectory)

  imageFilenames.forEach((file, i) => {
    congregations.forEach((cong, i) => {
      if (cong.name === file.split('.')[0]) {
        cong.img = file
      }
    })
  })
  return (
    <>
      <PageTitle img={MessianicCongregations} />

      <Box
        maxWidth={1350}
        width='95%'
        margin='auto'
        sx={{ backgroundColor: 'white', py: 3 }}
      >
        <SearchArea
          congregations={congregations}
          imageDirectory={imageDirectory}
        />
      </Box>
    </>
  )
}
