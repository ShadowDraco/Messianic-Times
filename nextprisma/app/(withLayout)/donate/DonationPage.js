'use client'
import React, { useState } from 'react'
import {
  IconButton,
  Box,
  Container,
  Typography,
  Button,
  Fade,
  Popper,
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import Link from 'next/link'
import Image from 'next/image'

import VenmoImage from '../../../public/assets/payments/venmo.webp'
import Google from '../../../public/assets/payments/Google.webp'
import Cards from '../../../public/assets/payments/Cards.webp'
import LinkImage from '../../../public/assets/payments/LinkImage.webp'
import CashApp from '../../../public/assets/payments/CashApp.webp'
import PayPalDonate from '../../../public/assets/payments/PayPalDonate.webp'
import MakeADifference from '../../../public/assets/page-titles/MakeADifference.webp'
import PageTitle from '../../../components/PageHeader/PageTitle'
import VenmoQR from '../../../public/assets/payments/qr.webp'
import { useWindowContext } from '../../Providers'

export default function DonationPage() {
  const [open, setOpen] = React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const { timesWidth, timesHeight } = useWindowContext()

  const handleVenmoPopper = event => {
    setAnchorEl(event.currentTarget)
    setOpen(previousOpen => !previousOpen)
  }

  const canBeOpen = open && Boolean(anchorEl)
  const id = canBeOpen ? 'transition-popper' : undefined

  return (
    <>
      <PageTitle
        img={MakeADifference}
        width={timesWidth}
        height={timesHeight}
      />
      <Container
        sx={{
          backgroundColor: 'white',
          py: 5,
        }}
      >
        <Typography variant='h4' component='h1' textAlign='center' gutterBottom>
          Help us reach the Jewish People for the LORD says: All Israel will be
          saved Romans 11:26
        </Typography>

        <Grid container spacing={2} width='80%' margin='auto' paddingLeft={2}>
          <Grid>
            <Link href='https://donate.stripe.com/test_6oEcQG1oM0hHd2M144'>
              <Image
                src={Google.src}
                width={100}
                height={25}
                alt='donate with google'
                priority
              />
            </Link>
          </Grid>

          <Grid>
            <Link href='https://donate.stripe.com/test_6oEcQG1oM0hHd2M144'>
              <Image
                src={LinkImage.src}
                width={100}
                height={25}
                alt='donate with Link'
                priority
              />
            </Link>
          </Grid>

          <Grid>
            <Link href='https://donate.stripe.com/test_6oEcQG1oM0hHd2M144'>
              <Image
                src={CashApp.src}
                width={100}
                height={25}
                alt='donate with cash app'
                priority
              />
            </Link>
          </Grid>

          <Grid>
            <Link href='https://donate.stripe.com/test_6oEcQG1oM0hHd2M144'>
              <Image
                src={Cards.src}
                width={200}
                height={25}
                alt='donate with cards'
                priority
              />
            </Link>
          </Grid>

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
        </Grid>
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
      </Container>
    </>
  )
}
