'use client'

import React from 'react'
import Box from '@mui/material/Box'
import Carousel from 'react-material-ui-carousel'
import Image from 'next/image'
import { Stack, Typography, Divider } from '@mui/material'

export default function PostCarousel({ posts }) {
  return (
    <Carousel
      sx={{
        margin: 'auto',
        maxWidth: 700,
        backgroundColor: 'black',
      }}
      showArrows={true}
      animation='slide'
    >
      {posts.map((post, i) => {
        const postDate = new Date(post.publishedAt).toDateString()
        console.log(post.author)
        return (
          <>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                width: 800,
                height: 500,
                maxWidth: 800,
                margin: 'auto',
              }}
            >
              <Image
                key={i}
                src={post.image}
                width={800}
                height={800}
                alt={post.title}
                layout='responsive'
                style={{ width: '100%' }}
                priority
              />

              <Stack
                sx={{
                  position: 'absolute',
                  maxWidth: 500,
                  left: '15%',
                  top: '25%;',
                  p: 2,
                  backgroundColor: 'rgba(50, 50, 50, 0.6)',
                }}
                spacing={2}
              >
                <Typography textAlign={'center'} variant='h4' color='white'>
                  {post.title}
                </Typography>

                <Typography color='white'>
                  By {post.author.name} | {postDate} | {post.release_months}
                </Typography>

                <Typography textAlign={'center'} variant='h5' color='white'>
                  {post.description}
                </Typography>
              </Stack>
            </Box>
          </>
        )
      })}
    </Carousel>
  )
}
