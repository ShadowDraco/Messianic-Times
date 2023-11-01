import React from 'react'
import { Container, Typography, Box, Button } from '@mui/material'
import Link from 'next/link'

export default function NotAuthorized() {
  return (
    <Container
      sx={{
        my: 4,
        width: '100%',
        height: '100%',
      }}
    >
      <Box
        margin='auto'
        width='80%'
        textAlign='center'
        sx={{ p: 2, backgroundColor: 'lightgray' }}
      >
        <Typography variant='h6' color='black'>
          <Link
            href='/products'
            style={{ textDecoration: 'none', color: 'blue' }}
          >
            ** Subscribe **
          </Link>{' '}
          to continue reading this article and access more content about Israel
          and the Messianic Community around the world.
        </Typography>
      </Box>
    </Container>
  )
}
