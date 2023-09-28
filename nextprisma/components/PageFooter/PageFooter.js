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
        <Grid container spacing={4} justifyContent='space-evenly'>
          {footers.map(footer => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant='h6' color='text.primary' gutterBottom>
                {footer.title}
              </Typography>
              <Stack style={{ listStyle: 'none' }} spacing={1.5}>
                {footer.description.map(item => (
                  <li key={item}>
                    <Button color='warning' variant='text'>
                      <Link href={footer.url}>
                        <Typography
                          variant='subtitle1'
                          color='text.secondary'
                          sx={{ textDecoration: 'none' }}
                        >
                          {item}
                        </Typography>
                      </Link>
                    </Button>
                  </li>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            alignItems: 'center',
          }}
        >
          <Copyright /> <Typography>Messianic Times</Typography>
        </Box>
      </Container>
    </>
  )
}
