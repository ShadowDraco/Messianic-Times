import { Box } from '@mui/material'
import React from 'react'
import AudioPlayer from '../audio/AudioPlayer'
import ContactUsButton from '../Buttons/ContactUsButton'
export default function MainFooter() {
  return (
    <Box
      sx={{
        padding: 1,
        position: 'sticky',
        textAlign: 'center',
        display: 'flex',
        margin: 'auto',
        justifyContent: 'space-between',
        bottom: '2px',
        width: '99%',
        maxWidth: '1350px',
        

        backgroundColor: 'rgba(50, 50, 50, 0.3)',
        opacity: '50%',
        transition: 'ease 1s ',

        ':hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          opacity: '100%',
        },
      }}
    >
      <AudioPlayer />
      <Box>
        <ContactUsButton />
      </Box>
    </Box>
  )
}
