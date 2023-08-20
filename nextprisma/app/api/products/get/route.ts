import { stripe } from '../../../../lib/stripe/stripe';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const prices = await stripe.prices.list({
    limit: 2,
  });

  return NextResponse.json(prices.data.reverse());
}
