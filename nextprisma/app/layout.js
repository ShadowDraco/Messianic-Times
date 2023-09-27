import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './Providers'
import Box from '@mui/material/Box'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TestingFeatures',
  description:
    'Using Prisma, Next Auth, Stripe and so much more for the first time!',
}

import { getServerSession } from 'next-auth'
import { authOptions } from '../app/api/auth/[...nextauth]/route'
import MainFooter from '../components/PageFooter/MainFooter'
import PageFooter from '../components/PageFooter/PageFooter'
export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions)
  return (
    <html lang='en'>
      <Providers session={session}>
        <body className={inter.className}>
          <Box sx={{ width: '95%', maxWidth: '1300', margin: 'auto' }}>
            {children}
          </Box>

          <PageFooter />
          <MainFooter />
        </body>
      </Providers>
    </html>
  )
}
