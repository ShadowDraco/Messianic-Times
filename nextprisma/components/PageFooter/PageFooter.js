'use client'
import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { Copyright } from '@mui/icons-material'
import Link from 'next/link'
import Image from 'next/image'
import BackgroundImage from '../../public/assets/messianic-times/Background.webp'
import { useWindowContext } from '../../app/Providers'
const footers = [
  {
    title: 'The Messianic Times',
    description: ['Team', 'History', 'Contact us', 'Location'],
    url: '/about',
  },
  {
    title: 'Features',
    description: [
      'Cool stuff',
      'Random feature',
      'Team feature',
      'Developer stuff',
      'Another one',
    ],
    url: '/account',
  },
  {
    title: 'Messianic Directories',
    description: [
      'Resource',
      'Resource name',
      'Another resource',
      'Final resource',
    ],
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
        maxWidth='md'
        component='footer'
        sx={{
          borderTop: `1px solid gray`,
          py: [3, 6],
          color: 'white',
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
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </>
  )
}
