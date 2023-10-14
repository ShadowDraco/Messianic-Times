import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './Providers'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The Messianic Times',
  description: 'The leading Messianic Paper since 1990',
}

import { getServerSession } from 'next-auth'
import { authOptions } from '../app/api/auth/[...nextauth]/route'
import MainFooter from '../components/PageFooter/MainFooter'
export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions)
  console.log(session?.user)
  return (
    <html lang='en'>
      <Providers session={session}>
        <body className={inter.className}>
          {children}
          <Analytics />

          <MainFooter
            audioVolume={session?.user.volume ? session.user.volume : 20}
            audioAutoPlay={
              session?.user.autoplay ? session.user.autoPlay : true
            }
          />
        </body>
      </Providers>
    </html>
  )
}
