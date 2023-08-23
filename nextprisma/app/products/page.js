import React from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { stripe } from '../../lib/stripe/stripe';

import BuyItemButton from '../../components/products/BuyItemButton';
import Pricing from '../../components/products/Pricing';
import { getProducts } from '../api/stripe/products/route';
export default async function ProductPage() {
  const session = await getServerSession(authOptions);

  if (!session) return 'You are not authorized to view this page';

  let unfilteredPrices = await getProducts(2000);
  const prices = unfilteredPrices.data.filter(price => price.active);

  if (!prices) return 'Loading...';

  const orderPrices = () => {
    return prices.sort((a, b) => {
      if (a.unit_amount > b.unit_amount) return 1;
      if (a.unit_amount < b.unit_amount) return -1;
      if (a.unit_amount === b.unit_amount) return 0;
    });
  };

  return <Pricing prices={orderPrices()} />;
}
