import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '../../api/auth/[...nextauth]/route'
import MainPage from './MainPage'
import isAdmin from '../../../lib/auth-functions/isAdmin'

export default async function page() {
  const ServerSession = await getServerSession(authOptions)

  return <MainPage isAdmin={isAdmin(ServerSession)} />
}
