'use client';
import React from 'react';

export default function BuyItemButton({ price, index }) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  const buyItem = async priceId => {
    const data = await fetch('/api/pay/stripe', {
      method: 'POST',
      body: JSON.stringify({ priceId: priceId }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    window.location.assign(await data.json());
  };

  return (
    <button
      onClick={() => {
        buyItem(price.id);
      }}
    >
      {' '}
      {index + 1} year subscription -{' '}
      {formatter.format(price.unit_amount / 100)}
    </button>
  );
}
