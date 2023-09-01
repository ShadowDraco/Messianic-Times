/*
//!
customer.subscription.created
//!
checkout.session.async_payment_succeeded
//! 
checkout.session.completed
*/
import { NextResponse, NextRequest } from 'next/server';
import { buffer } from 'micro';
import { headers } from 'next/headers';
import {
  handleCustomerSubscriptionCreated,
  handleCheckoutSessionCompleted,
  handleCheckoutSessionAsyncPaymentSucceeded,
} from './handlers';
import { stripe } from '../../../../lib/stripe/stripe';

//TODO
//? stripe listen --forward-to http://localhost:3000/api/stripe/confirm
//? stripe trigger subscription.payment_succeeded

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(request) {
  //? This is your Stripe CLI webhook secret for testing your endpoint locally.
  const endpointSecret =
    process.env.STRIPE_WEBHOOK_SECRET || '';
  const headersList = headers();
  const bodyBuffer = await buffer(request);
  const sig = headersList.get('stripe-signature') || '';
  let event;

  console.log(bodyBuffer);

  try {
    event = stripe.webhooks.constructEvent(bodyBuffer, sig, endpointSecret);
    console.log('EVENT', event);
  } catch (err) {
    console.log(`Webhook Error: ${err}`);
    return NextResponse.json(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.async_payment_succeeded':
      const checkoutSessionAsyncPaymentSucceeded = event.data.object;
      handleCheckoutSessionAsyncPaymentSucceeded(
        checkoutSessionAsyncPaymentSucceeded
      );
      break;
    case 'checkout.session.completed':
      const checkoutSessionCompleted = event.data.object;
      handleCheckoutSessionCompleted(checkoutSessionCompleted);
      break;
    case 'customer.subscription.created':
      const customerSubscriptionCreated = event.data.object;
      handleCustomerSubscriptionCreated(customerSubscriptionCreated);
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  return NextResponse.json({
    message: `successfully handled webhook callback for: ${event.type}`,
  });
}
