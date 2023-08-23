import React from 'react';

import { Box, Skeleton, Stack } from '@mui/material';

export default function HomeLoadingSkeleton() {
  return (
    <Stack spacing={3}>
      <Skeleton
        variant='h1'
        height={50}
      />
      <Skeleton
        variant='h1'
        height={50}
      />
      <Skeleton
        variant='h1'
        height={50}
      />
      <Skeleton
        variant='h1'
        height={50}
      />
      <Skeleton
        variant='h1'
        height={50}
      />
      <Skeleton
        variant='h1'
        height={50}
      />
    </Stack>
  );
}
