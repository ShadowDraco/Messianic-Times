import React from 'react'
import Button from '@mui/material/Button'
export default function NavButton({ children, size }) {
  return (
    <Button size={size} variant='contained' color='error'>
      {children}
    </Button>
  )
}
