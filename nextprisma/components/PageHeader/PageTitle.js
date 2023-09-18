import React from 'react'
import { Box, Typography } from '@mui/material'
export default function PageTitle({ title, img }) {
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
        }}
      >
        {img ? (
          <Image
            src={img.src}
            width={img.width}
            height={img.height}
            alt='Page Title'
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
