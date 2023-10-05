import React from 'react'

import PaperViewer from './PaperViewer'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../api/auth/[...nextauth]/route'
import NotLoggedIn from '../../../components/auth/NotLoggedIn'

export default async function page() {
  const session = await getServerSession(authOptions)
  if (!session) return <NotLoggedIn />
  

  return <PaperViewer />
}
