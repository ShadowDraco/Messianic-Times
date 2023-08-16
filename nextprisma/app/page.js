import { prisma } from '../lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import Image from 'next/image'

export default async function Home() {
  const session = await getServerSession(authOptions)
  const user = await prisma.user.findFirst({
    where: {
      email: 'test@test.com',
    },
  })
  return (
    <main>
      Hello {user?.name}
      <pre>{JSON.stringify(session)}</pre>
    </main>
  )
}
