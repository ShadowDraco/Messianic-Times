import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '../../../api/auth/[...nextauth]/route'
import NotLoggedIn from '../../../../components/auth/NotLoggedIn'
import NotAuthorized from '../../../../components/auth/NotAuthorized'
import Box from '@mui/material/Box'

import { Typography } from '@mui/material'
import { NewspaperIds } from '../../../../public/assets/papers/NewspaperScreenshots/Newspaper'
export default async function page(params) {
  const session = await getServerSession(authOptions)

  if (!session) return <NotLoggedIn />
  if (!session.user.activated) return <NotAuthorized />
  if (
    !session.user.hasFreePaper ||
    session.user.whichFreePaper !== params.params.paper
  )
    return <NotAuthorized />
  return (
    <Box>
      <Typography color='white'>Your FREE access to this paper</Typography>
      <Box
        style={{
          position: 'relative',
          paddingTop: 'max(60%,324px)',
          width: '100%',
          height: 0,
          margin: 'auto',
        }}
      >
        <iframe
          style={{
            position: 'absolute',
            border: 'none',
            width: ' 100%',
            height: '100%',
            left: 0,
            top: 0,
          }}
          src={`https://online.fliphtml5.com/${
            NewspaperIds[session.user.whichFreePaper-1]
          }`}
          seamless='seamless'
          scrolling='no'
          frameborder='0'
          allowtransparency='true'
          allowfullscreen='true'
        ></iframe>
      </Box>
    </Box>
  )
}
