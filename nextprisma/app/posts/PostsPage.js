'use client';

import { Container, Box, Button, Card } from '@mui/material';
import React from 'react';
import Link from 'next/link';

export default function PostsPage({ posts, session }) {
  if (!session) return 'You are not logged in';

  if (!posts) return 'There was an error fetching posts';

  return (
    <Container>
      See all posts:
      <Box>
        {posts.map(post => {
          return (
            <Box key={post._id}>
              <Link href={`/post/${post.slug.current}`}>
                <Button>
                  <a>{post.title}</a>
                </Button>
              </Link>
            </Box>
          );
        })}
      </Box>
      <Link href='/'>
        <Button variant='contained' color='info' sx={{my: 5}}>
          Home
        </Button>
      </Link>
    </Container>
  );
}
