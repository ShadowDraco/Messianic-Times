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
          marginBottom: 2,
        }}
      >
        {img ? (
          <Image
            src={img.src}
            width={width ? width : 600}
            height={height ? height : 250}
            alt='Page Title'
            layout='responsive'
            style={{ maxWidth: 1345 }}
          />
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
