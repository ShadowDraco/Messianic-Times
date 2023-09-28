import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
export default function PageTitle({ title, img, width, height }) {
  return (
    <>
      {/*//? Page Title */}
      <Box
        sx={{
          width: '100%',
          paddingY: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '1350px',
          margin: 'auto',
          my:2
        }}
      >
        {img ? (
          <Image src={img.src} width={width} height={height} alt='Page Title' />
        ) : (
          <Typography
            variant='h4'
            fontWeight={'bold'}
            color='whitesmoke'
            textAlign={'center'}
            maxWidth='1350px'
            margin='auto'
          >
            {title}
          </Typography>
        )}
      </Box>
    </>
  )
}
