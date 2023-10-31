import { Container, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import articles from '../../../public/assets/messianic-times/articles.webp'
import blogs from '../../../public/assets/messianic-times/blogs.webp'

export default function page() {
  return (
    <Container sx={{ backgroundColor: 'white', my: 2, py: 2 }}>
      <Typography variant='h3' textAlign={'center'} my={2}>
        {' '}
        Media of the Movement
      </Typography>

      <Typography
        variant='h3'
        textAlign={'center'}
        my={2}
        color='white'
        sx={{ backgroundColor: 'rgb(24, 46, 66)' }}
      >
        {' '}
        Articles
      </Typography>
      <Link href='/posts'>
        <Image
          src={articles.src}
          width={articles.width}
          height={articles.height}
          alt='some articles from the times'
          layout='responsive'
          priority
        />
      </Link>
      <Typography
        variant='h3'
        textAlign={'center'}
        my={2}
        color='white'
        sx={{ backgroundColor: 'rgb(24, 46, 66)' }}
      >
        {' '}
        Blogs
      </Typography>

      <Link href='/blogs'>
        <Image
          src={blogs.src}
          width={blogs.width}
          height={blogs.height}
          alt='some articles from the times'
          layout='responsive'
          priority
        />
      </Link>
    </Container>
  )
}
