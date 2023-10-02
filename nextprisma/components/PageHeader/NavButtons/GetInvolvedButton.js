import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

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
  ]
  const involvedUrls = ['/congregations', '/ministries', '/add-congregation']

  const [anchorElInvolved, setAnchorElInvolved] = useState(null)

  return (
    <>
      {!menuItem ? (
        <Button
          size='small'
          variant='contained'
          color='error'
          onClick={handleOpenInvolvedMenu}
          sx={{ my: 2 }}
          endIcon={<KeyboardArrowDownIcon />}
        >
          Get Involved
        </Button>
      ) : (
        <MenuItem onClick={handleOpenInvolvedMenu} sx={{ color: 'black' }}>
          Get Involved ˅
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
