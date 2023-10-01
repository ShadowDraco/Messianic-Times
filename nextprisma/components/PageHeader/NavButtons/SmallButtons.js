import React from 'react'
import Button from '@mui/material/Button'
import { Heart } from '../../icons/Icons'
export default function SmallButtons() {
  return (
    <>
      <Button size='small' variant='contained' color='error'>
        Home
      </Button>
      <Button size='small' variant='contained' color='error'>
        Get Involved
      </Button>
      <Button
        size='small'
        variant='contained'
        color='error'
        endIcon={<Heart />}
      >
        Donate
      </Button>
    </>
  )
}
