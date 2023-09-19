'use client'
import { useState } from 'react'
import { Box, Container, Button, Typography } from '@mui/material'
import Link from 'next/link'
import AuthButtons from '../components/auth/AuthButtons'
import BasicDeleteUserForm from '../components/auth/BasicDeleteUserForm'
import BasicCreateUserForm from '../components/auth/BasicCreateUserForm'
import { Paper, Shop, Book, At, Heart, Table } from '../components/icons/Icons'
import AdminDashLinks from '../components/icons/AdminDashLinks'
import BreathWrapper from '../components/motion/breath/BreathWrapper'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import University from '../public/assets/University.png'
import MJAA from '../public/assets/MJAA.png'
import LatestIssue from '../public/assets/LatestIssue.png'
import LatestPreview from '../public/assets/LatestPreview.png'
import { useWindowContext } from './Providers'
import { useEffect } from 'react'
import PageTitle from '../components/PageHeader/PageTitle'
export default function HomePage() {
  const { timesWidth, timesHeight } = useWindowContext()
  const [imageWidth, setImageWidth] = useState(timesWidth)
  useEffect(() => {
    if (timesWidth * 0.5 < 351) {
      setImageWidth(timesWidth * 0.5)
    } else {
      setImageWidth(350)
    }
  }, [timesWidth])
  const { data: session, status, update } = useSession()
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
              width={timesWidth / 3}
              height={timesWidth / 4}
              alt='Kings University'
            />
            <Image
              src={MJAA.src}
              width={timesWidth / 3}
              height={timesWidth / 4}
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
          <Image
            src={LatestIssue.src}
            width={imageWidth * 0.7}
            height={imageWidth * 0.8}
            alt='Contents of latest issue'
          />
          <Image
            src={LatestPreview.src}
            width={imageWidth}
            height={imageWidth * 0.8}
            alt='Preview of latest issue'
          />
        </Box>

        <Box className={'text-[#211] bg-[#B5DBFF] mt-0 p-3'}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
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
              <BreathWrapper>
                <Typography variant='h2'>Read the latest issue</Typography>
              </BreathWrapper>
            </Link>
          </Box>

          <Container className='py-2 my-2'>
            <BasicDeleteUserForm />

            <BasicCreateUserForm />
          </Container>

          <Container className={'flex gap-2 my-2 py-2'}>
            <AuthButtons />
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
              <Link href='/products'>
                <Button variant='outlined' color='success' endIcon={<Shop />}>
                  Products
                </Button>
              </Link>
              <Link href='/studio'>
                <Button variant='outlined' color='primary' endIcon={<Table />}>
                  Studio
                </Button>
              </Link>
              <Link href='/posts'>
                <Button variant='outlined' color='warning' endIcon={<Paper />}>
                  Posts
                </Button>
              </Link>
              <Link href='/read'>
                <Button variant='outlined' color='primary' endIcon={<Book />}>
                  Read
                </Button>
              </Link>
              <Link href='/about'>
                <Button variant='outlined' color='error' endIcon={<At />}>
                  About
                </Button>
              </Link>
              <Link href='/sendTicket'>
                <Button variant='outlined' color='success' endIcon={<At />}>
                  Contact us
                </Button>
              </Link>
              <Link href='/tickets'>
                <Button variant='outlined' color='primary' endIcon={<Paper />}>
                  View tickets
                </Button>
              </Link>
            </Box>
          </Container>
          <Box className='bg-[#002540]'>
            <AdminDashLinks />
          </Box>
          <Typography>
            {session?.user
              ? JSON.stringify(session.user)
              : 'user not logged in'}
          </Typography>
        </Box>
      </Box>
    </>
  )
}
