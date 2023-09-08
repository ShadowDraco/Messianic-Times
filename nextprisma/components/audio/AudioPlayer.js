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
  const [song, setSong] = useState(Math.floor(Math.random() * 2 + 1))

  const playlist = [
    '/audio/HavaNagila.mp3',
    '/audio/HisStrengthIsPerfect.mp3',
    'TheBeautyOfYAWEH.mp3',
  ]

  const playAudio = () => {
    audioRef.current.play()
    setPaused(false)
  }
  const pauseAudio = () => {
    audioRef.current.pause()
    setPaused(true)
  }

  const playRandomSong = () => {
    setSong(Math.floor(Math.random() * 2 + 1))
    audioRef.current.src = song
    audioRef.current.load()
    audioRef.current.play()
  }

  return (
    <Box width='30%' sx={{ display: 'flex' }}>
      <audio
        ref={audioRef}
        src={playlist[song]}
        autoPlay
        onEnded={() => {
          playRandomSong
        }}
      />

      <PlayPauseButtons
        paused={paused}
        playAudio={playAudio}
        pauseAudio={pauseAudio}
        playRandomSong={playRandomSong}
      />
    </Box>
  )
}
export default AudioPlayer
