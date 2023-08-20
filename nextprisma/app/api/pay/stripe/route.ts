import { stripe } from '../../../../lib/stripe/stripe';
import { NextResponse, NextRequest } from 'next/server';

const STRIPE_DOMAIN = 'http://localhost:3000';

export async function POST(request) {
  let data = await request.json();
  let priceId = data.priceId;

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (e.g. pr_1234) of the product you want to sell
        price: priceId,
        quantity: 1,
      },
    ],
    mode: 'subscription',
    success_url: STRIPE_DOMAIN + '/products',
    cancel_url: STRIPE_DOMAIN + '/products',
  });

  return NextResponse.json(session.url);
}