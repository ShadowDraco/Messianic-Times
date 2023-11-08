import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
export default function PageTitle({ title, img, width, height }) {
  return (
    <Box
      sx={{
        margin: 'auto',
        width: '100%',
        maxWidth: 1348,
      }}
    >
      {img ? (
        <Image
          src={img.src}
          width={width ? width : 600}
          height={height ? height : 250}
          alt='Page Title'
          layout='responsive'
          priority
        />
      ) : (
        <Typography
          variant='h4'
          fontWeight={'bold'}
          color='whitesmoke'
          textAlign={'center'}
          maxWidth='1348'
          margin='auto'
        >
          {title}
        </Typography>
      )}
    </Box>
  )
}
