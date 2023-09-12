import React from 'react'
import Box from '@mui/material/Box'
export default function BorderBox({ children, wide, med }) {
  let boxWidth = '4em'
  if (wide) boxWidth = '30%'
  if (med) boxWidth = '15%'

  return (
    <Box
      sx={{
        border: '2px groove black',
        paddingX: 1,
        paddingY: 2,
        width: boxWidth,
      }}
    >
      {children}
    </Box>
  )
}
