import React from 'react'

import { getServerSession } from 'next-auth'
import { authOptions } from '../../../../api/auth/[...nextauth]/route'
import NotLoggedIn from '../../../../../components/auth/NotLoggedIn'

export default async function page({ params }) {
  console.log(params)
  const session = await getServerSession(authOptions)
  if (!session) return <NotLoggedIn />

  return (
    <div
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
        src={`https://online.fliphtml5.com/${params.paper}/${params.code}`}
        seamless='seamless'
        scrolling='no'
        frameborder='0'
        allowtransparency='true'
        allowfullscreen='true'
      ></iframe>
    </div>
  )
}
