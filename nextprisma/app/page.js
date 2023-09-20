'use client'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import AuthButtons from '../components/auth/AuthButtons'
import BasicDeleteUserForm from '../components/auth/BasicDeleteUserForm'
import BasicCreateUserForm from '../components/auth/BasicCreateUserForm'
import { Heart } from '../components/icons/Icons'
import AdminDashLinks from '../components/icons/AdminDashLinks'
import BreathWrapper from '../components/motion/breath/BreathWrapper'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import University from '../public/assets/adverts/University.webp'
import MJAA from '../public/assets/adverts/MJAA.webp'

import LatestIssue from '../public/assets/previews/LatestIssue.webp'
import LatestPreview from '../public/assets/previews/LatestPreview.webp'
import { useWindowContext } from './Providers'

import PageTitle from '../components/PageHeader/PageTitle'

export default function HomePage() {
  const { timesWidth, timesHeight } = useWindowContext()

  const { data: session, update } = useSession()
  return (
    <>
      <PageTitle title='The leading Messianic Paper since 1990' />
      <Box
        sx={{
          paddingY: 0,
          backgroundColor: '#45B0FF',
          width: '100%',
          maxWidth: '1300px',
        }}
      >
        <Box sx={{ paddingY: 3, backgroundColor: '#0D99FF' }}>
          <Typography
            variant='h5'
            color='white'
            fontWeight={'bold'}
            textAlign={'center'}
            paddingBottom={2}
          >
            Visit our Advertisers
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
              paddingY: 2,
            }}
          >
            <Image
              src={University.src}
              width={timesWidth / 4}
              height={timesWidth / 5}
              alt='Kings University'
            />
            <Image
              src={MJAA.src}
              width={timesWidth / 4}
              height={timesWidth / 5}
              alt='MJAA'
            />
          </Box>
        </Box>

        <Typography
          variant='h4'
          color='black'
          fontWeight={'bold'}
          textAlign={'center'}
          paddingBottom={2}
        >
          <BreathWrapper>Read the latest issue!</BreathWrapper>
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            paddingY: 2,
          }}
        >
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Image
              src={LatestIssue.src}
              width={timesWidth}
              height={timesHeight}
              layout='responsive'
              style={{ maxWidth: '300px' }}
              alt='Contents of latest issue'
            />
          </Box>
          <Image
            src={LatestPreview.src}
            width={timesWidth}
            height={timesHeight}
            layout='responsive'
            style={{ maxWidth: timesWidth > 1000 ? '700px' : '500px' }}
            alt='Preview of latest issue'
          />
        </Box>

        <Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              flexWrap: 'wrap',
              textAlign: 'center',
            }}
          >
            <Typography variant='h3' component='h3' my={3}>
              Hello
              {session?.user?.name
                ? ` ${session.user.name}`
                : ', please log in'}{' '}
            </Typography>
            <Button
              onClick={() => {
                update({ name: 'John' })
              }}
            >
              Update
            </Button>
            <Link href='/donate' style={{ width: 'fit-content' }}>
              <BreathWrapper>
                <Button
                  size='large'
                  variant='contained'
                  sx={{ mr: 8 }}
                  endIcon={<Heart />}
                >
                  Donate
                </Button>
              </BreathWrapper>
            </Link>
          </Box>

          <Container className='py-2 my-2'>
            <BasicDeleteUserForm />

            <BasicCreateUserForm />
          </Container>

          <Container className={'flex gap-2 my-2 py-2'}>
            <AuthButtons />
          </Container>
          <Box className='bg-[#002540]'>
            <AdminDashLinks />
          </Box>
          <Typography sx={{ wordWrap: 'break-word' }}>
            {session?.user
              ? JSON.stringify(session.user)
              : 'user not logged in'}
          </Typography>
        </Box>
      </Box>
    </>
  )
}
