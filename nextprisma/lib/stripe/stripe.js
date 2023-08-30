import Stripe from 'stripe';
import wait from '../wait';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function getProducts(ms) {
  let prices = await stripe.prices.list({ limit: 5 });

  if (ms) await wait(ms);
  return prices;
}
