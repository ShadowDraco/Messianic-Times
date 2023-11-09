import React from 'react'
import DonationPage from './DonationPage'
import DonationPageBackground from '../../../public/assets/messianic-times/DonatePageBackground.webp'
import Box from '@mui/material/Box'
export default async function page() {
  return (
    <Box
      sx={{ width: '100%', height: '100%', maxWidth: 1346, margin: 'auto' }}
      
    >
      <DonationPage />
    </Box>
  )
}
