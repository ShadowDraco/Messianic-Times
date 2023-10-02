import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../api/auth/[...nextauth]/route'
import dynamic from 'next/dynamic'

import { getProducts } from '../../../lib/stripe/stripe'
export default async function ProductPage() {
  const Pricing = dynamic(() => import('./Pricing'), {
    ssr: false,
  })
  const session = await getServerSession(authOptions)

  let prices = await getProducts()

  if (!prices) return 'Loading...'

  const orderPrices = () => {
    return prices.sort((a, b) => {
      if (a.unit_amount > b.unit_amount) return 1
      if (a.unit_amount < b.unit_amount) return -1
      if (a.unit_amount === b.unit_amount) return 0
    })
  }

  return <Pricing prices={orderPrices()} />
}
