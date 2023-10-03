import Box from '@mui/material/Box'

import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import PageTitle from '../../components/PageHeader/PageTitle'

import MainPage from './MainPage'

export default async function HomePage() {
  const session = await getServerSession(authOptions)
  return (
    <>
      <PageTitle title='The leading Messianic Paper since 1990' />
      <Box
        sx={{
          paddingY: 0,
          backgroundColor: '#45B0FF',
          width: '100%',
          maxWidth: '1300px',
          margin: 'auto',
        }}
      >
        <MainPage session={session} />
      </Box>
    </>
  )
}
