import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '../../../api/auth/[...nextauth]/route'
import NotLoggedIn from '../../../../components/auth/NotLoggedIn'
import NotAuthorized from '../../../../components/auth/NotAuthorized'
import Box from '@mui/material/Box'
import Image from 'next/image'
import { Typography } from '@mui/material'
export default async function page(params) {
  const session = await getServerSession(authOptions)

  if (!session) return <NotLoggedIn />
  if (
    !session.user.hasFreePaper ||
    session.user.whichFreePaper !== params.params.paper
  )
    return <NotAuthorized />
  return (
    <Box>
      <Typography color='white'>Your FREE access to this paper</Typography>
      <Box sx={{ display: 'flex', justifyContent: ' center' }}>
        <Image
          src={`/assets/papers/TrialPaperscreenshots/${session.user.whichFreePaper}/1.webp`}
          width={500}
          height={700}
          alt='newspaper cover'
        />
      </Box>
    </Box>
  )
}
