import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'
import { updateUser } from '../../../../lib/prisma/crud'
export async function POST(request) {
  const body = await request.json()
  const session = await getServerSession()
  const currentPaper = '1'
  console.log(body)
  if (!session || body.email !== session.user.email)
    return NextResponse.json(
      {
        success: 'failed',
        message: 'Request received',
        hasFreePaper: null,
        whichFreePaper: null,
      },
      { status: 500, statusText: 'You are not authorized' }
    )
  if (session.user.hasFreePaper) {
    return NextResponse.json(
      {
        success: 'failed',
        message: 'Request received',
        hasFreePaper: true,
        whichFreePaper: user.whichFreePaper,
      },
      { status: 500, statusText: 'You already have a free paper' }
    )
  }

  try {
    await updateUser(session.user.email, {
      hasFreePaper: true,
      whichFreePaper: currentPaper,
    })

    return NextResponse.json(
      {
        success: 'success!',
        message: 'You received a free paper',
        hasFreePaper: true,
        whichFreePaper: currentPaper,
      },
      { status: 200, statusText: 'success!' }
    )
  } catch (error) {
    return NextResponse.json(
      {
        success: 'failed',
        message: 'There was an error, please try again later',
      },
      { status: 500, statusText: `Error receiving free paper: ${error}` }
    )
  }
}
