'use client';
import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import Link from 'next/link';
import { Credit, Globe } from '../../components/icons/Icons';

import PaypalDonationButton from './PaypalDonationButton';
import PayPalButtonsWrapper from './PayPalButtonsWrapper';

export default function DonationPage() {
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

      <PaypalDonationButton />

      <Link href='https://donate.stripe.com/test_6oEcQG1oM0hHd2M144'>
        <Button endIcon={<Credit />}>With Card</Button>
      </Link>

      <Link href='https://donate.stripe.com/test_6oEcQG1oM0hHd2M144'>
        <Button endIcon={<Globe />}>With Google Pay</Button>
      </Link>

      <PayPalButtonsWrapper />
    </Container>
  );
}
