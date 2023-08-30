import React from 'react';
import PayPalDonate from '../../components/assets/PayPalDonate.png';
import Image from 'next/image';
export default async function PaypalDonationButton() {
  return (
    <form
      action='https://www.paypal.com/donate'
      method='post'
      target='_top'
    >
      <input
        type='hidden'
        name='business'
        value='J9UNV4S2D4582'
      />
      <input
        type='hidden'
        name='no_recurring'
        value='0'
      />
      <input
        type='hidden'
        name='currency_code'
        value='USD'
      />
      <input
        type='image'
        src={PayPalDonate.src}
        width={100}
        height={50}
        border='0'
        name='submit'
        title='PayPal - The safer, easier way to pay online!'
        alt='Donate with PayPal button'
      />
      <Image
        alt=''
        border='0'
        src='https://www.paypal.com/en_US/i/scr/pixel.gif'
        width='1'
        height='1'
      />
    </form>
  );
}
