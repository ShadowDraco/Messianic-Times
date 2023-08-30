import { NextResponse } from 'next/server';

import { captureOrder } from '../../../../../../lib/paypal/functions';

export const POST = async (req, params) => {
  try {
   
    const { orderID } = params.params;
    
    const { jsonResponse, httpStatusCode } = await captureOrder(orderID);
    console.log('CAPTURED ORDER:', jsonResponse, httpStatusCode);
    NextResponse.json(JSON.stringify(jsonResponse), { status: httpStatusCode });
  } catch (error) {
    console.error('Failed to create order:', error);
    NextResponse.json({ error: 'Failed to capture order.' }, { status: 500 });
  }
};
