'use client'
import React, { useState, useRef } from 'react'
import {
  Box,
  Container,
  Skeleton,
  Button,
  IconButton,
  LinearProgress,
  Stack,
  Slider,
} from '@mui/material'
import { VolumeDown, VolumeUp } from '@mui/icons-material'

import PlayPauseButtons from './PlayPauseButtons'

const AudioPlayer = () => {
  const audioRef = useRef()
  const [muted, setMuted] = useState(true)
  const [volume, setVolume] = useState(50)
  const [visible, setVisible] = useState(false)
  const [paused, setPaused] = useState(false)
  const [song, setSong] = useState(Math.floor(Math.random() * 3))

  const playlist = [
    '/audio/HavaNagila.mp3',
    '/audio/HisStrengthIsPerfect.mp3',
    '/audio/TheBeautyOfYAWEH.mp3',
  ]

  const playAudio = () => {
    audioRef.current.play()
    setPaused(false)
  }
  const pauseAudio = () => {
    audioRef.current.pause()
    setPaused(true)
  }

  const playRandomSong = async () => {
    setSong(Math.floor(Math.random() * 3))
    audioRef.current.src = playlist[song]
    console.log(song)
    await audioRef.current.load()
    audioRef.current.play()
  }

  const changeVolume = (e, newValue) => {
    setVolume(newValue)
    audioRef.current.volume = newValue / 100
  }

  return (
    <Box width='50%' sx={{ display: 'flex' }}>
      <audio
        ref={audioRef}
        src={playlist[song]}
        autoPlay
        onEnded={() => {
          playRandomSong
        }}
        volume={volume / 100}
      />
      <PlayPauseButtons
        paused={paused}
        playAudio={playAudio}
        pauseAudio={pauseAudio}
        playRandomSong={playRandomSong}
      />
      <Stack
        spacing={1}
        direction='row'
        sx={{ mx: 1, mb: 1, width: '30%' }}
        alignItems='center'
      >
        <Slider
          aria-label='Volume'
          value={volume}
          max={100}
          onChange={changeVolume}
        />
        <VolumeUp />
      </Stack>
    </Box>
  )
}
export default AudioPlayer
