/*
//!
customer.subscription.created
//!
checkout.session.async_payment_succeeded
//! 
checkout.session.completed
*/
import { NextResponse, NextRequest } from 'next/server';
import { headers } from 'next/headers';
import {
  handleCustomerSubscriptionDeleted,
  handleCheckoutSessionCompleted,
} from './handlers';
import { stripe } from '../../../../lib/stripe/stripe';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';

//TODO
//? stripe listen --forward-to http://localhost:3000/api/stripe/confirm
//? stripe trigger subscription.payment_succeeded

export async function POST(request) {
  //? This is your Stripe CLI webhook secret for testing your endpoint locally.
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET || '';
  const headersList = headers();
  const buf = await request.text();
  const sig = headersList.get('stripe-signature') || '';
  let event;

  try {
    event = stripe.webhooks.constructEvent(buf, sig, endpointSecret);
  } catch (err) {
    console.log(`Webhook Error: ${err}`);
    return NextResponse.json(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  switch (event.type) {
    case 'customer.subscription.deleted':
      const customerSubscriptionDeleted = event.data.object;
      handleCustomerSubscriptionDeleted(customerSubscriptionDeleted);
      break;
    case 'checkout.session.completed':
      const checkoutSessionCompleted = event.data.object;
      handleCheckoutSessionCompleted(checkoutSessionCompleted);
      break;
    /* case 'customer.subscription.created':
      const customerSubscriptionCreated = event.data.object;
      handleCustomerSubscriptionCreated(customerSubscriptionCreated, session);
      break;*/
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  return NextResponse.json({
    message: `successfully handled webhook callback for: ${event.type}`,
  });
}
