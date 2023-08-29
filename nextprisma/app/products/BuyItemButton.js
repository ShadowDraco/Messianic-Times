'use client';
import { Button } from '@mui/material';
import React from 'react';

export default function BuyItemButton({ price, index }) {
  const buyItem = async priceId => {
    const data = await fetch('/api/stripe/pay', {
      method: 'POST',
      body: JSON.stringify({
        priceId: priceId,
        isSubscription: !price.recurring ? false : true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    window.location.assign(await data.json());
  };

  return (
    <Button
      fullWidth
      onClick={() => {
        buyItem(price.id);
      }}
    >
      Purchase!
    </Button>
  );
}
