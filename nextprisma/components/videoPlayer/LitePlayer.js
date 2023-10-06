'use client'
import React from 'react'
import Box from '@mui/material/Box'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
export default function LitePlayer() {
  return (
    <Box
      sx={{
        width: '50%',
        margin: 'auto',
        cursor: 'pointer',
        height: '50%',
      }}
    >
      <LiteYouTubeEmbed
        id='X4S0MYMb4os'
        title='More than a newspaper!'
        webp={true}
      />
    </Box>
  )
}
