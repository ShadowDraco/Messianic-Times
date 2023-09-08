'use client'
import React, { useState } from 'react'
import ReactPlayer from 'react-player'
const AudioPlayer = () => {
  const [muted, setMuted] = useState(true)
  const [visible, setVisible] = useState(false)
  return (
    <audio
      src='https://drive.google.com/drive/u/0/folders/1RAifDyrgPXnZkruVW5ki4tcjHuMRAFTt'
      controls
      autoPlay
    />
  )
}
export default AudioPlayer
