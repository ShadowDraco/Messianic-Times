import React from 'react'
import { Box, Skeleton } from '@mui/material'
export default async function BasicLoadingSkeleton() {
  const width = 300
  return (
    <Box sx={{ margin: 'auto' }}>
      <Skeleton variant='rectangular' width='100%' height={200} />

      <Skeleton sx={{ marginY: 4 }} variant='h1' />
      <Box
        sx={{
          display: 'flex',
          gap: 1,
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <Skeleton width={width} height={width} />
        <Skeleton width={width} height={width} />
        <Skeleton width={width} height={width} />
        <Skeleton width={width} height={width} />
      </Box>
    </Box>
  )
}
