'use client'
import React from 'react'
import { Box, Typography } from '@mui/material'
import { PortableText } from '@portabletext/react'

export default function DefaultAuthorView({ author }) {
  return (
    <Box className='bg-[#aaa] my-3 p-3'>
      <Typography variant='h4' className='my-3'>
        Author: {author.name}
      </Typography>

      <PortableText
        className='my-3'
        value={author.bio}
        //components={optional}
      />
    </Box>
  )
}
