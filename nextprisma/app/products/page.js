import React from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { stripe } from '../../lib/stripe/stripe';

import BuyItemButton from '../../components/BuyItemButton';
export default async function page() {
  const session = await getServerSession(authOptions);

  if (!session) return 'You are not authorized to view this page';

  const prices = await stripe.prices.list({ limit: 4 });

  if (!prices) return 'Loading...';

  return (
    <div>
      PRICING:{' '}
      {prices?.data?.map((price, i) => {
        return (
          <>
            <br></br>
            <BuyItemButton
              key={i}
              index={i}
              price={price}
            />
          </>
        );
      })}
      <br></br>
      <a href='/'>
        <button>Home</button>
      </a>
    </div>
  );
}
