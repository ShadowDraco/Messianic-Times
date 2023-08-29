import { NextResponse } from 'next/server';

import { captureOrder } from '../../../../../../lib/paypal/functions';

export const POST = async req => {
  try {
    const { orderID } = req.params;
    const { jsonResponse, httpStatusCode } = await captureOrder(orderID);
    NextResponse.json(jsonResponse, { status: httpStatusCode });
  } catch (error) {
    console.error('Failed to create order:', error);
    NextResponse.json({ error: 'Failed to capture order.' }, { status: 500 });
  }
};
