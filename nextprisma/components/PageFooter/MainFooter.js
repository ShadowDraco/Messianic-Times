import { Box } from '@mui/material'
import React from 'react'
import AudioPlayer from '../audio/AudioPlayer'
export default function MainFooter() {
  return (
    <Box
      sx={{
        position: 'sticky',
        bottom: '2px',
        width: '100%',
        backgroundColor: 'rgba(50, 50, 50, 0.3)',
        opacity: '50%',
        transition: 'ease 1s ',
        ':hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          opacity: '100%',
        },
      }}
    >
      <AudioPlayer />
    </Box>
  )
}
