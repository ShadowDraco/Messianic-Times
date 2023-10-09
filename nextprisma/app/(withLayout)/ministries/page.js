import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import MessianicMinistriesWorldWide from '../../../public/assets/page-titles/MessianicMinistriesWorldWide.webp'
import Image from 'next/image'
import PageTitle from '../../../components/PageHeader/PageTitle'

import { promises as fs } from 'fs'
import path from 'path'
import Link from 'next/link'

export default async function page() {
  const imageDirectory = path.join(process.cwd(), '/public/assets/ministries')
  const imageFilenames = await fs.readdir(imageDirectory)
  const altNames = imageFilenames.map(name => {
    return name.split('.')[0]
  })
  return (
    <>
      <PageTitle img={MessianicMinistriesWorldWide} />
      <Box
        sx={{
          margin: 'auto',
          my: 2,
          py: 2,
          width: '100%',
          maxWidth: 1300,
          backgroundColor: 'white',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            paddingY: 2,
            flexWrap: 'wrap',
          }}
        >
          {imageFilenames.map((el, i) => (
            <Link href={urlsInOrder[i]} key={el} target='_blank'>
              <Image
                width={500}
                height={500}
                layout='responsive'
                alt={altNames[i]}
                style={{ maxWidth: 350, maxHeight: 250 }}
                priority
                src={`/assets/ministries/${el}`}
              />
            </Link>
          ))}
        </Box>
      </Box>
    </>
  )
}

const urlsInOrder = [
  'https://www.ariel.org/home',
  'https://www.avivministry.com/en/',
  'http://besorahinstitute.org/',
  'https://chosenpeople.com/site/',
  'http://www.cjfm.org/',
  'https://discoveringthejewishjesus.com/',
  'https://www.friendsofmakorhatikvah.org/',
  'https://mjaa.org/',
  'https://jerusalemseminary.org/',
  'https://jewsforjesus.org/',
  'https://messianicjewish.net/',
  'https://www.metrojewishag.org/',
  'https://mjaa.org/',
  'https://www.maozisrael.org/',
  'https://reachii.org/',
  'https://www.rockofisrael.org/',
  'https://sarshalomisrael.org/',
  'https://mesianic.ro/',
  'https://www.tku.edu/academics/messianic/',
  'https://torahtodayministries.org/',
  'https://www.umjc.org/',
  'http://www.ymja.org/',
]
