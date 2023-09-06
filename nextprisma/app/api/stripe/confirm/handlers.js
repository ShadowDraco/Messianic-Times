import { prisma } from '../../../../lib/prisma/prisma';

/*export const handleCheckoutSessionAsyncPaymentSucceeded = (event) => {
  console.log(`\nEVENT - ${event.object} !!\n`, event);
};*/

export const handleCheckoutSessionCompleted = event => {
  console.log(`\nEVENT - ${event.object} !!\n`, event);

  const date1 = new Date(event.created * 1000);
  const date2 = new Date(event.expires_at * 1000);
  const startDate = date1.toLocaleDateString('en-US');
  const endDate = date2.toLocaleDateString('en-US');

  if (event.mode === 'subscription') {
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
  } else {
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
  }
};

/*export const handleCustomerSubscriptionCreated = (event) => {
  console.log(`\nEVENT - ${event.object} !!\n`, event);
};
*/
