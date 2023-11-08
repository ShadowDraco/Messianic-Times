import React from 'react'

import Grid from '@mui/material/Unstable_Grid2'
import Link from 'next/link'
import Image from 'next/image'

import Google from '../../../public/assets/payments/Google.webp'
import Cards from '../../../public/assets/payments/Cards.webp'
import LinkImage from '../../../public/assets/payments/LinkImage.webp'
import CashApp from '../../../public/assets/payments/CashApp.webp'
export default function StripePayments() {
  return (
    <Grid container spacing={2} width='80%' margin='auto' paddingLeft={2} my={2}>
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
    </Grid>
  )
}
