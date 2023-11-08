'use client'
import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
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
      <AppBar position='static' sx={{ px: 1 }}>
        <Toolbar disableGutters>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 1,
            }}
          >
            {pages.map((page, i) =>
              timesWidth < 1100 && page === 'Home' ? (
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
                    size='small'
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
              )
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
