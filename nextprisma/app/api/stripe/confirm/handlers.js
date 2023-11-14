import { updateUser } from '../../../../lib/prisma/crud'
import { stripe } from '../../../../lib/stripe/stripe'
import moment from 'moment'

/*export const handleCheckoutSessionAsyncPaymentSucceeded = (event) => {
  console.log(`\nEVENT - ${event.object} !!\n`, event);
};*/

export const handleCheckoutSessionCompleted = async event => {
  console.log(`\nEVENT - ${event.object} !!\n`, event)

  if (event.status === 'complete' && event.payment_status === 'paid') {
    if (event.mode === 'subscription') {
      console.log('Handling SUBSCRIPTION')
      let startDate
      let endDate
      let subscriptionType

      if (event.amount_total == 1299) {
        console.log('1 YEAR SUBSCRIPTION!!')
        startDate = moment()
        endDate = moment().add(1, 'years')
        subscriptionType = '1Year'
      }
      if (event.amount_total == 1699) {
        console.log('2 YEAR SUBSCRIPTION!!')
        startDate = moment()
        endDate = moment().add(2, 'years')
        subscriptionType = '2Year'
      }
      if (event.amount_total == 1999) {
        console.log('3 YEAR SUBSCRIPTION!!')
        endDate = moment().add(3, 'years')
        startDate = moment()
        subscriptionType = '3Year'
      }

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
      )

      console.log('subscription details ', startDate, endDate)
      const customer = event.customer_details
      const updatedUser = await updateUser(customer.email, {
        subscriptionType: subscriptionType,
        subscribedAt: startDate,
        endSubscriptionDate: endDate,
      })
    } else if (event.mode === 'payment') {
      console.log(
        'Handling PAYMENT: Mode:',
        event.mode,
        ' Amount: ',
        event.amount_total
      )

      if (event.submit_type === 'donation') {
        ////?????? //!!!!!
        console.log('Handling DONATION')
        //!! Unlock recipes and other donator only stuff here
        return
      }

      const updatedUser = await updateUser(event.customer_details.email, {
        subscriptionType: subscriptionType,
        subscribedAt: startDate.toISOString(),
        endSubscriptionDate: endDate.toISOString(),
      })
    }
  } else {
    console.log(
      'PAYMENT INCOMPLETE OR UNPAID',
      event.status,
      event.payment_status
    )
  }
}

export const handleCustomerSubscriptionDeleted = async event => {
  console.log(`\nEVENT - ${event.object} !!\n`, event)

  console.log('cancellation details ', event)
  const customer = await stripe.customers.retrieve(event.customer)

  const updatedUser = await updateUser(customer.email, {
    subscriptionType: 'None',
    subscribedAt: null,
    endSubscriptionDate: null,
  })
}
