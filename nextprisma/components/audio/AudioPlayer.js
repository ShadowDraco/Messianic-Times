'use client'
import React, { useState, useRef } from 'react'
import {
  Box,
  Container,
  Skeleton,
  Button,
  IconButton,
  LinearProgress,
} from '@mui/material'

import PlayPauseButtons from './PlayPauseButtons'

const AudioPlayer = () => {
  const audioRef = useRef()
  const [muted, setMuted] = useState(true)
  const [visible, setVisible] = useState(false)
  const [progress, setProgress] = useState(50)
  const [paused, setPaused] = useState(false)

  const playAudio = () => {
    audioRef.current.play()
    setPaused(false)
  }
  const pauseAudio = () => {
    audioRef.current.pause()
    setPaused(true)
  }

  return (
    <Box width='30%' sx={{ display: 'flex' }}>
      <audio ref={audioRef} src='/audio/HavaNagila.mp3' autoPlay />
      <PlayPauseButtons
        paused={paused}
        playAudio={playAudio}
        pauseAudio={pauseAudio}
      />
    </Box>
  )
}
export default AudioPlayer
