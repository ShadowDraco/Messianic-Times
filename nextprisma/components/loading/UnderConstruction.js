import React from 'react'

import { Box, Skeleton, Stack, Typography } from '@mui/material'

export default function HomeLoadingSkeleton() {
  return (
    <Box sx={{ margin: 'auto', my: 2, py: 2 }}>
      <Typography variant='h3' color='white' textAlign={'center'} my={2}>
        {' '}
        Uh-oh, this page is still under construction!
      </Typography>
      <Stack spacing={3}>
        <Skeleton variant='h1' height={50} />
        <Skeleton variant='h1' height={50} />
        <Skeleton variant='h1' height={50} />
        <Skeleton variant='h1' height={50} />
        <Skeleton variant='h1' height={50} />
        <Skeleton variant='h1' height={50} />
      </Stack>
    </Box>
  )
}
