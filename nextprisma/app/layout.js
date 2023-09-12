import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TestingFeatures',
  description:
    'Using Prisma, Next Auth, Stripe and so much more for the first time!',
}

import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import MainHeader from '../components/PageHeader/MainHeader'
export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions)
  return (
    <html lang='en'>
      <Providers session={session}>
        <body className={inter.className}>
          <MainHeader />
          {children}
        </body>
      </Providers>
    </html>
  )
}
