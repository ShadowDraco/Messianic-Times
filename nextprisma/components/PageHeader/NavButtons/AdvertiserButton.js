import React, { useState } from 'react'
import Button from '@mui/material/Button'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'

import MenuItem from '@mui/material/MenuItem'

import Link from 'next/link'

export default function AdvertiserButton({ menuItem }) {
  const handleOpenAdvertiserMenu = event => {
    setAnchorElAdvertiser(event.currentTarget)
  }

  const handleCloseAdvertiserMenu = () => {
    setAnchorElAdvertiser(null)
  }
  const advertisePages = ['Start Advertising', 'Advertise with Us', 'Our Advertisers']
  const advertiseUrls = ['/start-advertising', '/advertising', '/advertisers']
  const [anchorElAdvertiser, setAnchorElAdvertiser] = useState(null)

  return (
    <>
      {!menuItem ? (
        <Button
          size='small'
          variant='contained'
          color='error'
          onClick={handleOpenAdvertiserMenu}
          sx={{ my: 2 }}
          endIcon={<KeyboardArrowDownIcon />}
        >
          Advertising
        </Button>
      ) : (
        <MenuItem onClick={handleOpenAdvertiserMenu} sx={{ color: 'black' }}>
          Advertising ˅
        </MenuItem>
      )}
      <Menu
        sx={{ mt: '45px' }}
        id='get-Advertiser-menu'
        anchorEl={anchorElAdvertiser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElAdvertiser)}
        onClose={handleCloseAdvertiserMenu}
      >
        {advertisePages.map((page, i) => (
          <Link
            key={i}
            href={advertiseUrls[i]}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <MenuItem key={i} onClick={handleCloseAdvertiserMenu}>
              <Typography textAlign='center'>{page}</Typography>
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </>
  )
}
