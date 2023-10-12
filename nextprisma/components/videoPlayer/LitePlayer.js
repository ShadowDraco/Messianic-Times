'use client'
import React from 'react'
import Box from '@mui/material/Box'
//import { LiteYoutubeEmbed } from 'react-lite-yt-embed'
import LiteYoutubeEmbed from 'react-lite-youtube-embed'
export default function LitePlayer() {
  return (
    <Box
      sx={{
        margin: 'auto',
        width: '50%',
        minHeight: 100,
        cursor: 'pointer',
      }}
    >
      < LiteYoutubeEmbed id='X4S0MYMb4os' />
      /*<LiteYoutubeEmbed id='X4S0MYMb4os' mute={false} lazyImage={true} iframeTitle='More than a newspaper!' imageAltText='More than a newspaper!' />*/
    </Box>
  )
}
