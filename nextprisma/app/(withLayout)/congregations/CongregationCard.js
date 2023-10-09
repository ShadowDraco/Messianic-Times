import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import Link from 'next/link'
import Image from 'next/image'

import { Box, Typography } from '@mui/material'
export default function CongregationCard({ church, i }) {
  return (
    <Box sx={{ px: 1, backgroundColor: 'rgb(24, 46, 66)', maxWidth: '47% ' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          px: 1,
          backgroundColor: 'white',
        }}
      >
        <Link href={church.url} target='_blank'>
          <Typography fontWeight={'bold'}>{church.name}</Typography>{' '}
        </Link>
        <Link href={church.url} target='_blank'>
          <ArrowRightAltIcon fontSize='large' style={{ color: 'black' }} />{' '}
        </Link>
      </Box>
      <Box
        sx={{
          display: 'flex',
          backgroundColor: 'white',
          px: 1,
          justifyContent: 'space-between',
          gap: 1,
          alignItems: 'center',
        }}
      >
        <Box sx={{ maxWidth: '30% ' }}>
          <Image
            src={church.img.src}
            width={church.img.width}
            height={church.img.height}
            alt={church.name}
            layout='responsive'
            priority={i < 20}
          />
        </Box>
        <address>
          <Typography variant='body2'>
            {church.country}, {church.city}, {church.state && church.state}
          </Typography>
        </address>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {church.phone !== '' && (
            <Link href={`tel:${church.phone}`}>
              <PhoneIcon style={{ color: 'black' }} />
            </Link>
          )}
          <Link href={`mailto:${church.email}`}>
            <EmailIcon style={{ color: 'black' }} />
          </Link>
        </Box>
      </Box>
    </Box>
  )
}
