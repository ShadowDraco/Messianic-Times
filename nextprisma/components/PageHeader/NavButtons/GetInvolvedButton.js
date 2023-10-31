import React, { useState } from 'react'
import Button from '@mui/material/Button'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'

import MenuItem from '@mui/material/MenuItem'

import Link from 'next/link'

export default function GetInvolvedButton({ menuItem }) {
  const handleOpenInvolvedMenu = event => {
    setAnchorElInvolved(event.currentTarget)
  }

  const handleCloseInvolvedMenu = () => {
    setAnchorElInvolved(null)
  }

  const involvements = [
    'Congregation Directory',
    'Ministry Directory',
    'Add your congregation!',
    'Media', 
  ]
  const involvedUrls = ['/congregations', '/ministries', '/add-congregation', '/media']

  const [anchorElInvolved, setAnchorElInvolved] = useState(null)

  return (
    <>
      {!menuItem ? (
        <Button
          variant='contained'
          size='small'
          onClick={handleOpenInvolvedMenu}
          sx={{ my: 2, color: 'blue', backgroundColor: 'white' }}
          endIcon={<KeyboardArrowDownIcon />}
        >
          Messianic Community
        </Button>
      ) : (
        <MenuItem onClick={handleOpenInvolvedMenu} sx={{ color: 'black' }}>
          Messianic Community ˅
        </MenuItem>
      )}
      <Menu
        sx={{ mt: '45px' }}
        id='get-involved-menu'
        anchorEl={anchorElInvolved}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElInvolved)}
        onClose={handleCloseInvolvedMenu}
      >
        {involvements.map((involvement, i) => (
          <Link
            key={i}
            href={involvedUrls[i]}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <MenuItem key={i} onClick={handleCloseInvolvedMenu}>
              <Typography textAlign='center'>{involvement}</Typography>
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </>
  )
}
