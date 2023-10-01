import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'

import { Heart } from '../../icons/Icons'
import Link from 'next/link'
export default function LargeButtons() {
  const pages = ['Home', 'Read', 'Advertising', 'Get Involved', 'About Us']
  const pageUrls = ['/', '/read', '/advertising', '/get-involved', '/about']
  const settings = ['Account', 'Login', 'Logout', 'Help']
  const settingUrls = ['/account', '/api/auth/signin', '/logout', '/sendTicket']

  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <>
      <AppBar position='static'>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
                color='inherit'
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page, i) => (
                  <Link
                    key={i}
                    href={pageUrls[i]}
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign='center'>{page}</Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'space-evenly',
              }}
            >
              {pages.map((page, i) => (
                <Link
                  key={i}
                  href={pageUrls[i]}
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    variant='contained'
                    sx={{
                      my: 2,
                      color: 'rgb(200, 100, 100)',
                      display: 'block',
                    }}
                  >
                    {page}
                  </Button>
                </Link>
              ))}
            </Box>

            <Link href='/donate'>
              <Button
                sx={{ marginRight: 3 }}
                size='large'
                variant='contained'
                color='error'
                endIcon={<Heart />}
              >
                Donate
              </Button>
            </Link>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title='Open settings'>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt='Settings Avatar'
                    src='/assets/messianic-times/avatar.webp'
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id='menu-appbar'
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting, i) => (
                  <Link key={i} href={settingUrls[i]}>
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign='center'>{setting}</Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}
