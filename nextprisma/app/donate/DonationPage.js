'use client';
import React, { useState } from 'react';
import {
  IconButton,
  Box,
  Container,
  Typography,
  Button,
  Fade,
  Popper,
} from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import {
  Credit,
  Venmo,
  GooglePay,
  CashApp,
  PayPal,
} from '../../components/icons/Icons';

import VenmoQR from '../../assets/payments/qr.png';

export default function DonationPage() {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleVenmoPopper = event => {
    setAnchorEl(event.currentTarget);
    setOpen(previousOpen => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? 'transition-popper' : undefined;

  return (
    <Container>
      <Typography
        variant='h4'
        component='h1'
        gutterBottom
      >
        Romans 11:26 - All Israel will be saved...
        <br></br>
        Help us reach the Jewish People
      </Typography>

      <Link href='https://donate.stripe.com/test_6oEcQG1oM0hHd2M144'>
        <Button endIcon={<Credit />}>Card</Button>
      </Link>

      <Link href='https://donate.stripe.com/test_6oEcQG1oM0hHd2M144'>
        <Button endIcon={<CashApp />}>CashApp</Button>
      </Link>

      <Link href='https://donate.stripe.com/test_6oEcQG1oM0hHd2M144'>
        <IconButton color='primary'>
          <GooglePay />
        </IconButton>
      </Link>

      <Link href='https://donate.stripe.com/test_6oEcQG1oM0hHd2M144'>
        <Button endIcon={<PayPal />}>PayPal</Button>
      </Link>

      <IconButton
        color='primary'
        onClick={e => {
          handleVenmoPopper(e);
        }}
      >
        <Venmo />
      </IconButton>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        transition
      >
        {({ TransitionProps }) => (
          <Fade
            {...TransitionProps}
            timeout={350}
          >
            <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
              <Image
                src={VenmoQR.src}
                width={200}
                height={500}
              />
            </Box>
          </Fade>
        )}
      </Popper>
    </Container>
  );
}
