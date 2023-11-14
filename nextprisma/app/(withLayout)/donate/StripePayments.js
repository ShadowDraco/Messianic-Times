import React from 'react'

import Box from '@mui/material/Box'
import Link from 'next/link'
import Image from 'next/image'

import PaymentOptions from '../../../public/assets/payments/PaymentOptions.webp'

import PayPalDonate from '../../../public/assets/payments/PaypalScreenShot.webp'
export default function StripePayments() {
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'space-evenly' }}
      width='100%'
      margin='auto'
      my={2}
    >
      <Link href='https://donate.stripe.com/test_6oEcQG1oM0hHd2M144'>
        <Image
          src={PaymentOptions.src}
          width={300}
          height={300}
          alt='secure payment options'
          layout='responsive'
          priority
          style={{ maxWidth: 500 }}
        />
      </Link>

      <Link href='https://www.paypal.com/donate/?hosted_button_id=HVZKAQMFWPNXY'>
        <Image
          src={PayPalDonate.src}
          width={150}
          height={110}
          alt='donate with paypal'
          priority
        />
      </Link>
    </Box>
  )
}
