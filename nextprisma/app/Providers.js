'use client';
import React from 'react';

import { PayPalScriptProvider } from '@paypal/react-paypal-js';

export default function Providers({ children, initialPaypalOptions }) {
  return (
    <PayPalScriptProvider options={initialPaypalOptions}>
      {children}
    </PayPalScriptProvider>
  );
}
