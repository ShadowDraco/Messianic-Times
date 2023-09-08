import React from 'react'
import { IconButton } from '@mui/material'
import { Play, Pause } from '../icons/Icons'
export default function PlayPauseButtons({ paused, playAudio, pauseAudio }) {
  return (
    <>
      {paused ? (
        <IconButton
          onClick={() => {
            playAudio()
          }}
        >
          <Play />
        </IconButton>
      ) : (
        <IconButton
          onClick={() => {
            pauseAudio()
          }}
        >
          <Pause />
        </IconButton>
      )}
    </>
  )
}
