import './globals.css';
import { Inter } from 'next/font/google';
import Providers from './Providers';

const initialPaypalOptions = {
  clientId: process.env.PAYPAL_CLIENT_ID,
  currency: 'USD',
  intent: 'capture',
  'enable-funding': 'venmo',
};
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'TestingFeatures',
  description:
    'Using Prisma, Next Auth, Stripe and so much more for the first time!',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers initialPaypalOptions={initialPaypalOptions}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
