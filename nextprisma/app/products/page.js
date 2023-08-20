import React from 'react';
import { stripe } from '../../lib/stripe/stripe';
export default async function page() {
  const prices = await stripe.prices.list({ limit: 4 });
  
  return (
    <div>
      PRICING:{' '}
      {prices?.data?.map(price => {
        return (
          <p key={price.id}>
            {price.id} : {price.unit_amount}
          </p>
        );
      })}
      <br></br>
      <a href='/'>
        <button>Home</button>
      </a>
    </div>
  );
}
