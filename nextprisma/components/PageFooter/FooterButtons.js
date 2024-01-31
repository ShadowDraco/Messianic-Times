'use client'
import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import Link from 'next/link'
import GetInvolvedButton from '../PageHeader/NavButtons/GetInvolvedButton'
import AdvertiserButton from '../PageHeader/NavButtons/AdvertiserButton'
import { useWindowContext } from '../../app/Providers'
export default function FooterButtons() {
  const [anchorElNav, setAnchorElNav] = useState(null)
  const { timesWidth } = useWindowContext()

  const pages = [
    'Home',
    'Read',
    'Advertising',
    'About Us',
    'Contact Us',
    'Special Offers',
    'Messianic Community',
  ]
  const pageUrls = [
    '/',
    '/read',
    '/advertising',
    '/about',
    '/sendTicket',
    '/special-offers',
    '/messianic-community',
  ]

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <Box
      sx={{
        backgroundColor: '#0D99FF',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: 1,
        maxWidth: '1330px',
        margin: 'auto',
      }}
    >
      <Grid container spacing={3} rowSpacing={4} sx={{ alignItems: 'center' }}>
        {pages.map((page, i) => (
          <Grid item md>
            {timesWidth < 1100 && page === 'Home' ? (
              ''
            ) : page === 'Messianic Community' ? (
              <GetInvolvedButton key={i} />
            ) : page === 'Advertising' ? (
              <AdvertiserButton key={i} />
            ) : (
              <Link
                key={i}
                href={pageUrls[i]}
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  fullWidth
                  variant='contained'
                  color='error'
                  sx={{
                    my: 2,
                    color: 'white',
                    display: 'block',
                  }}
                >
                  {page}
                </Button>
              </Link>
            )}
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
