import React from 'react'
import { Box, Typography, Divider, Grid } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
export default function DefaultArticleView({ post }) {
  const postDate = new Date(post.publishedAt).toDateString()

  return (
    <Box sx={{ my: 2 }}>
      <Grid
        container
        gap={1}
        sx={{ margin: 'auto', width: '80%', maxWidth: 700 }}
      >
        <Grid item xs>
          <Typography color='black'>{post.author.name}</Typography>
        </Grid>
        <Divider orientation='vertical' flexItem></Divider>
        <Grid item xs>
          <Typography color='black'> {postDate}</Typography>
        </Grid>
        <Divider orientation='vertical' flexItem></Divider>
        <Grid item xs>
          <Typography color='black'>{post.release_months}</Typography>
        </Grid>
      </Grid>
      <Box sx={{ my: 3, display: 'flex', justifyContent: 'center' }}>
        <Image
          src={post.image}
          width={700}
          height={700}
          alt={post.title}
          layout={'responsive'}
          style={{ maxWidth: 700, maxHeight: 570 }}
          priority
        />
      </Box>

      <Box
        sx={{
          width: '80%',
          maxWidth: '700px',
          margin: 'auto',
          fontWeight: '400',
          fontFamily: 'cursive',
        }}
      >
        <PortableText value={post.body} components={[Typography]} />
      </Box>
    </Box>
  )
}
