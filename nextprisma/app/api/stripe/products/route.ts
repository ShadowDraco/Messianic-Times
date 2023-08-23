import { stripe } from '../../../../lib/stripe/stripe';
import { NextResponse } from 'next/server';
import wait from '../../../../lib/wait';

export async function GET(request) {
  const prices = await stripe.prices.list({
    limit: 5,
  });

  return NextResponse.json(prices.data.reverse());
}

export async function getProducts(ms) {
  let prices = await stripe.prices.list({ limit: 5 });

  if (ms) await wait(ms);
  return prices;
}
