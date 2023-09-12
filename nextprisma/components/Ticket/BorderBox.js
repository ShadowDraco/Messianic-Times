import React from 'react'
import Box from '@mui/material/Box'
export default function BorderBox({
  children,
  wide,
  med,
  table = false,
  overflowX = 'none',
}) {
  let boxWidth = '12%'
  if (wide) boxWidth = '40%'
  if (med) boxWidth = '20%'

  return (
    <Box
      sx={{
        border: '2px groove black',
        paddingX: 1,
        paddingY: 2,
        width: boxWidth,
        height: 'fit-content',
        overflowX: table ? 'none' : overflowX,
      }}
    >
      {children}
    </Box>
  )
}
