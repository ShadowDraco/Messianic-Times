'use client'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function PostsPage({ posts, session }) {
  if (!session) return 'You are not logged in'

  if (!posts) return 'There was an error fetching articles'

  return (
    <Container sx={{ backgroundColor: 'white', my: 2, py: 2 }}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          justifyContent: 'center',
        }}
      >
        {posts.map((post, i) => {
          return (
            <Card key={post._id} sx={{ maxWidth: 345 }}>
              <Link href={`/post/${post.slug.current}`}>
                <CardMedia
                  sx={{
                    height: 140,
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                  image={post.image}
                  title={post.title}
                />
              </Link>
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  {post.title}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {post.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Link href={`/post/${post.slug.current}`}>
                  <Button size='small'>Learn More</Button>
                </Link>
              </CardActions>
            </Card>
          )
        })}
      </Box>
    </Container>
  )
}
