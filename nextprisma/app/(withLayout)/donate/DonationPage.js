'use client'

import React from 'react'
import { Container, Typography, Box } from '@mui/material'

import MakeADifference from '../../../public/assets/page-titles/MakeADifference.webp'
import PageTitle from '../../../components/PageHeader/PageTitle'

import { useWindowContext } from '../../Providers'
import StripePayments from './StripePayments'
import NonStripePayments from './NonStripePayments'

export default function DonationPage() {
  const { timesWidth, timesHeight } = useWindowContext()

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
        <Box sx={{ backgroundColor: 'rgba(100, 100, 250, 1)' }}>
          <Typography
            variant='h4'
            component='h1'
            textAlign='center'
            fontWeight={'bold'}
            gutterBottom
          >
            Help us reach the{' '}
            <span style={{ color: 'white' }}>Jewish People</span> for the LORD
            says: <span style={{ color: 'rgb(255, 180, 50)' }}>All Israel</span>{' '}
            will be saved Romans 11:26
          </Typography>
        </Box>

        <StripePayments />

        <NonStripePayments />
      </Container>
    </>
  )
}
