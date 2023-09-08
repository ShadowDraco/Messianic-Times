import React from 'react'
import { Icon, IconButton } from '@mui/material'
import { Play, Pause, Shuffle } from '../icons/Icons'
export default function PlayPauseButtons({
  paused,
  playAudio,
  pauseAudio,
  playRandomSong,
}) {
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

      <IconButton
        onClick={() => {
          playRandomSong()
        }}
      >
        <Shuffle />
      </IconButton>
    </>
  )
}
