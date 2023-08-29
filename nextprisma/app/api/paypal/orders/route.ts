import { NextResponse } from 'next/server';

import { createOrder } from '../../../../lib/paypal/functions';

export const POST = async req => {
  try {
    // use the cart information passed from the front-end to calculate the order amount details
    const { cart } = req.body;
    const { jsonResponse, httpStatusCode } = await createOrder(cart);
    return NextResponse.json(jsonResponse, { status: httpStatusCode });
  } catch (error) {
    console.error('Failed to create order:', error);
    return NextResponse.json(
      JSON.stringify({ error: 'Failed to create order.' }),
      { status: 500 }
    );
  }
};
