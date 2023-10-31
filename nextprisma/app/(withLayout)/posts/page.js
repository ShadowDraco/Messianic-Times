import React from 'react'

import { groq } from 'next-sanity'
import dynamic from 'next/dynamic'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../api/auth/[...nextauth]/route'
import { client } from '../../../sanity/lib/client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

export default async function page() {
  const PostsPage = dynamic(() => import('./PostsPage'), {
    ssr: false,
  })
  const session = await getServerSession(authOptions)

  const query = groq`
    *[_type == "post"] {
    ...,
    categories[]->
    }
  `
  const posts = await client.fetch(query)
  posts.map(post => {
    return (post.image = urlFor(post.mainImage).width(500).url())
  })

  return <PostsPage posts={posts} session={session} />
}
