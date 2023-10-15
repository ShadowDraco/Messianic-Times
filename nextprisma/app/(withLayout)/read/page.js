import React from 'react'
import {
  NewspaperCovers,
  NewspaperIds,
} from '../../../public/assets/papers/NewspaperScreenshots/Newspaper'
import { Box, Container } from '@mui/material'
import Image from 'next/image'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../api/auth/[...nextauth]/route'
import NotAuthorized from '../../../components/auth/NotAuthorized'
import NotLoggedIn from '../../../components/auth/NotLoggedIn'
import NotSubscribed from '../../../components/auth/NotSubscribed'
import Link from 'next/link'
export default async function page() {
  const session = await getServerSession(authOptions)
  if (!session) return <NotLoggedIn />
  if (!session.user.activated) return <NotAuthorized />
  if (session.user.subscriptionType === 'None') return <NotSubscribed />
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: 2,
        flexWrap: 'wrap',
      }}
    >
      {NewspaperCovers.map((cover, i) => {
        return (
          <Link key={i} href={`/read/${NewspaperIds[i]}`}>
            <Image
              src={cover.src}
              width={200}
              height={300}
              alt={`Newspaper ${i + 1}`}
            />
          </Link>
        )
      })}
    </Container>
  )
}
