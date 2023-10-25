import React from 'react'

import Image from 'next/image'
import { Box, Stack, Typography } from '@mui/material'
import YourFirstChoice from '../../../public/assets/adverts/YourFirstChoice.webp'
import Link from 'next/link'

export default function page() {
  return (
    <Box
      sx={{
        margin: 'auto',
        my: 2,
        p: 4,
        backgroundColor: 'white',
        maxWidth: 1300,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Image
          src={YourFirstChoice.src}
          width={YourFirstChoice.width}
          height={YourFirstChoice.height}
          alt={
            'The Messianic times is your first choice to reach the Messianic Market'
          }
          layout={'responsive'}
          style={{ maxWidth: '800px' }}
        />
      </Box>

      <Box
        sx={{
          mt: 4,
          backgroundColor: 'rgb(24, 46, 66)',
          py: 2,
          display: { xs: 'none', md: 'flex' },
          justifyContent: 'center',
        }}
      >
        <Typography
          variant='h3'
          color='white'
          textAlign={'center'}
          fontWeight={'bold'}
        >
          <Link
            href='mailto:advertising@messianictimes.com'
            style={{ textDecorationThickness: '3px', color: 'white' }}
          >
            advertising@messianictimes.com
          </Link>
        </Typography>
      </Box>
      <Box
        sx={{
          mt: 4,
          backgroundColor: 'rgb(24, 46, 66)',
          py: 2,
          display: { xs: 'flex', md: 'none' },
          justifyContent: 'center',
        }}
      >
        <Typography
          variant='h5'
          color='white'
          textAlign={'center'}
          fontWeight={'bold'}
        >
          <Link
            href='mailto:advertising@messianictimes.com'
            style={{ textDecorationThickness: '3px', color: 'white' }}
          >
            advertising@messianictimes.com
          </Link>
        </Typography>
      </Box>

      <Box sx={{ backgroundColor: '#3499D9' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            backgroundColor: '#3499D9',
            py: 5,
          }}
        >
          <Stack spacing={1}>
            <Typography variant='h5' fontWeight={'bold'} color='white'>
              Print
            </Typography>
            <Typography variant='h5' fontWeight={'bold'} color='white'>
              Digital
            </Typography>
            <Typography variant='h5' fontWeight={'bold'} color='white'>
              Eblast
            </Typography>
            <Typography variant='h5' fontWeight={'bold'} color='white'>
              Media Packages
            </Typography>
          </Stack>
          <Stack spacing={1}>
            <Typography variant='h5' fontWeight={'bold'} color='white'>
              List:
            </Typography>
            <Typography variant='h5' fontWeight={'bold'} color='white'>
              Congregations
            </Typography>
            <Typography variant='h5' fontWeight={'bold'} color='white'>
              Churches
            </Typography>
            <Typography variant='h5' fontWeight={'bold'} color='white'>
              Ministries
            </Typography>
          </Stack>
        </Box>
        <Typography
          variant={'h4'}
          color='black'
          textAlign={'center'}
          pb={3}
          fontWeight={'bold'}
        >
          <Link
            href='tel:1 (866)-612-7770'
            style={{ textDecorationThickness: '2px', color: 'black' }}
          >
            1 (866)-612-7770
          </Link>
        </Typography>
      </Box>
    </Box>
  )
}
