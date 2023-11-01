'use client'
import React from 'react'
import { Box, Typography } from '@mui/material'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
export default function DefaultAuthorView({ author }) {
  return (
    <Box className='bg-[#aaa] my-3 p-3'>
      <Typography variant='h4' className='my-3'>
        Author: {author.name}
      </Typography>

      <Image src={author.image} width={200} height={200} alt={author.name} />

      <PortableText
        className='my-3'
        value={author.bio}
        //components={optional}
      />
    </Box>
  )
}
