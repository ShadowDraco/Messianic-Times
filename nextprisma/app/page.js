import dynamic from 'next/dynamic'
const HomePage = dynamic(() => import('./HomePage'), {
  ssr: false,
})
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'

export default async function Home() {
  const session = await getServerSession(authOptions)

  return <HomePage session={session} />
}
