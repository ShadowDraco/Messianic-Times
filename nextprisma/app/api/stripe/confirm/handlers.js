import { updateUser } from '../../../../lib/prisma/crud';
import { prisma } from '../../../../lib/prisma/prisma';
import { stripe } from '../../../../lib/stripe/stripe';

/*export const handleCheckoutSessionAsyncPaymentSucceeded = (event) => {
  console.log(`\nEVENT - ${event.object} !!\n`, event);
};*/

export const handleCheckoutSessionCompleted = async event => {
  console.log(`\nEVENT - ${event.object} !!\n`, event);

  if (event.type === 'subscription') {
    console.log('Handling SUBSCRIPTION');
    const date1 = new Date(event.created * 1000);
    const date2 = new Date(event.expires_at * 1000);
    const startDate = date1.toLocaleDateString('en-US');
    const endDate = date2.toLocaleDateString('en-US');
    const subscribedAt = date1.toISOString();
    const endSubscriptionDate = date2.toISOString();

    console.log(
      `\n--- EVENT DETAILS:`,
      '\n USER SESSION: ',
      event.customer_details.email,
      event.customer_details.name,
      '\n Payment MODE: ',
      event.mode,
      '\n Start Date',
      startDate,
      '\n End Date',
      endDate,
      '\n STATUS: ',
      event.status
    );

    console.log('subscription details ', subscribedAt, endSubscriptionDate);
    const customer = event.customer_details;
    const updatedUser = await updateUser(customer.email, {
      subscriptionType:
        'Add subscription type metadata to purchases!!! and use that here',
      subscribedAt: subscribedAt,
      endSubscriptionDate: endSubscriptionDate,
    });
  } else if (event.type === 'payment') {
    console.log('Handling PAYMENT');
    if (event.intent === 'donation') {
      console.log('Handling DONATION');
    }
  }
};

export const handleCustomerSubscriptionDeleted = async event => {
  console.log(`\nEVENT - ${event.object} !!\n`, event);

  console.log('cancellation details ', event);
  const customer = await stripe.customers.retrieve(event.customer);
  console.log(customer);
  const updatedUser = await updateUser(customer.email, {
    subscriptionType: 'None',
    subscribedAt: null,
    endSubscriptionDate: null,
  });
};
