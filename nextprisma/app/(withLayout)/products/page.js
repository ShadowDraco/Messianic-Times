'use client'
import { Box } from '@mui/material'
import { Helmet } from 'react-helmet'

export default async function ProductPage() {
  return (
    <Box
      sx={{
        maxWidth: 1350,
        margin: 'auto',
        my: 2,
        py: 5,
        backgroundColor: '#172854',
      }}
    >
      <Helmet>
        <script async src='https://js.stripe.com/v3/pricing-table.js'></script>
      </Helmet>
      <h1>Digital subscription .... </h1>
      <stripe-pricing-table
        pricing-table-id='prctbl_1OCBoGIVYQQQD7CtG3Wonlad'
        publishable-key='pk_test_51NgyVcIVYQQQD7CtIiSDJJQbaYOuPY2RpEq9oYSh42rFXqGwwqNxWAoKnfRvTJ84hxEk6GsVrwhprA8EQMBCyi9R00WCKB7KfU'
      ></stripe-pricing-table>
    </Box>
  )
}
