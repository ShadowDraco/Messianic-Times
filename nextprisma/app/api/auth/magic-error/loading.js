import React from 'react';
import { Box, Skeleton, Flex } from '@mui/material';
export default function loading() {
  return (
    <Box sx={{ pt: 0.5 }}>
      <Skeleton
        variant='rectangular'
        width='100%'
        height={200}
      />
      <Flex
        gap={3}
        mt={3}
      >
        <Skeleton
          width={200}
          height={200}
        />
        <Skeleton
          width={200}
          height={200}
        />
        <Skeleton
          width={200}
          height={200}
        />
      </Flex>
    </Box>
  );
}
