'use client'
import React from 'react'
import Box from '@mui/material/Box'

import YouTube from 'react-youtube'
import { useWindowContext } from '../../app/Providers'
export default function LitePlayer() {
  const { timesWidth, timesHeight } = useWindowContext()
  return (
    <Box>
      <YouTube
        opts={{ width: timesWidth / 1.6, height: timesHeight * 3 }}
        videoId='X4S0MYMb4os'
        id='X4S0MYMb4os' // defaults -> ''
        title='More than a newspaper' // defaults -> ''
      />
    </Box>
  )
}
