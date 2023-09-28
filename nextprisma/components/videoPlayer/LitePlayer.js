'use client'
import React from 'react'
import Box from '@mui/material/Box'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
export default function LitePlayer() {
  return (
    <Box sx={{ width: '50%', margin: 'auto' }}>
      <LiteYouTubeEmbed
        aspectHeight={9}
        aspectWidth={16}
        playerClass='litePlayerPlayer'
        id='aNK7_W1VFD4'
        title='More than a newspaper!'
      />
    </Box>
  )
}
