import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'
import { authOptions } from '../../../auth/[...nextauth]/route'
import { updateUser } from '../../../../../lib/prisma/crud'

export async function POST(request) {
  const body = await request.json()
  
  const session = await getServerSession(authOptions)

  if (!session || body.email !== session.user.email)
    return NextResponse.json(
      { message: 'you are not authorized' },
      { status: 500, statusText: 'You are not authorized' }
    )

  try {
    await updateUser(session.user.email, { ...body })
    return NextResponse.json(
      { message: 'Updated', body },
      { status: 200, statusText: 'successful update' }
    )
  } catch (error) {
    return NextResponse.json(
      {},
      { status: 500, statusText: `Error updating user: ${error}` }
    )
  }
}
