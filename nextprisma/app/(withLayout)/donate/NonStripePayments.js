'use client'
import React, { useState } from 'react'

import Grid from '@mui/material/Unstable_Grid2'
import Link from 'next/link'
import Image from 'next/image'

import VenmoQR from '../../../public/assets/payments/qr.webp'
import VenmoImage from '../../../public/assets/payments/venmo.webp'
import PayPalDonate from '../../../public/assets/payments/PayPalDonate.webp'

import { Box, Fade, Popper } from '@mui/material'

export default function NonStripePayments() {
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const handleVenmoPopper = event => {
    setAnchorEl(event.currentTarget)
    setOpen(previousOpen => !previousOpen)
  }

  const canBeOpen = open && Boolean(anchorEl)
  const id = canBeOpen ? 'transition-popper' : undefined

  return (
    <Grid container spacing={2} width='80%' margin='auto' paddingLeft={2}>
      <Grid>
        <Link href='https://www.paypal.com/donate/?hosted_button_id=HVZKAQMFWPNXY'>
          <Image
            src={PayPalDonate.src}
            width={100}
            height={25}
            alt='donate with paypal'
            priority
          />
        </Link>
      </Grid>

      <Grid>
        <Image
          src={VenmoImage.src}
          width={70}
          height={50}
          alt={'donate with venmo'}
          onClick={e => {
            handleVenmoPopper(e)
          }}
          priority
        />
      </Grid>

      <Grid>
        <Popper id={id} open={open} anchorEl={anchorEl} transition>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Box
                sx={{
                  border: 1,
                  p: 1,
                  bgcolor: 'background.paper',
                  maxWidth: '50%',
                }}
              >
                <Image
                  src={VenmoQR.src}
                  width={VenmoQR.width / 3}
                  height={VenmoQR.height / 3}
                  layout='responsive'
                  alt='venmo qr code'
                  priority
                />
              </Box>
            </Fade>
          )}
        </Popper>
      </Grid>
    </Grid>
  )
}
