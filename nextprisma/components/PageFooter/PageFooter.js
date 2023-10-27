'use client'
import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Copyright } from '@mui/icons-material'
import Link from 'next/link'

import { useWindowContext } from '../../app/Providers'
const footers = [
  {
    title: 'The Messianic Times',
    description: ['About us', 'Contact us'],
    url: '/about',
  },
  {
    title: 'Features',
    description: ['Paper', 'Recipes', 'Account'],
    url: '/account',
  },
  {
    title: 'Messianic Directories',
    description: ['Churches', ''],
    url: '/congregations',
  },
  /*  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },*/
]

export default function PageFooter() {
  const { timesWidth, timesHeight } = useWindowContext()
  return (
    <>
      <Container
        maxWidth='1350'
        width='95%'
        component='footer'
        sx={{
          borderTop: `1px solid black`,
          py: 2,
          mt: 2,
          backgroundColor: '#3499D9',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Typography variant={'body1'} color={'white'}>
            With the Messianic Times you can: read news from the worldwide
            Messianic community, Israeli current events and analysis, opinion
            pieces, book, music and film reviews, informative articles and a
            directory of Messianic Jewish congregations.
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <Button></Button>
          </Box>
          <Typography variant='caption'>
            Copyright © 2023 Messianic Times
          </Typography>
        </Box>
      </Container>
    </>
  )
}
