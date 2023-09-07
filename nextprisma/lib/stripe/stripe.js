import Stripe from 'stripe';
import wait from '../wait';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function getProducts(ms) {
  const priceKeys = JSON.parse(process.env.STRIPE_PRODUCT_KEYS);

  const prices = await Promise.all(
    priceKeys.map(async key => {
      return await stripe.prices.retrieve(key);
    })
  );

  if (ms) await wait(ms);
  return JSON.parse(JSON.stringify(prices));
}
