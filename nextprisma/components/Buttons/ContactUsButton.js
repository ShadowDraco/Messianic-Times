import React from 'react'
import Link from 'next/link'
import Button from '@mui/material/Button'
import { At } from '../icons/Icons'

export default function ContactUsButton() {
  return (
    <Link href='/sendTicket'>
      <Button variant='outlined' color='success' endIcon={<At />}>
        Contact us
      </Button>
    </Link>
  )
}
