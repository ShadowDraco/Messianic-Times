import React from 'react'

import Box from '@mui/material/Box'

import { groq } from 'next-sanity'
import { client } from '../../../sanity/lib/client'
import PostCarousel from './PostCarousel'

import imageUrlBuilder from '@sanity/image-url'
const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

const query = groq`
  *[_type == 'post']
  {
    ...,
    author->
  }
`
const posts = await client.fetch(query)

posts.map(post => {
  return (post.image = urlFor(post.mainImage).width(800).url())
})

export default async function layout({ children }) {
  return (
    <Box>
      <Box>{children}</Box>
      <PostCarousel posts={posts} />
    </Box>
  )
}
