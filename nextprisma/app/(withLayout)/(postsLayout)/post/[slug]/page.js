import React from 'react'

import DefaultArticleView from '../../../../../components/sanity/Content/Articles/DefaultArticleView'
import Link from 'next/link'
import { Button, Container, Typography } from '@mui/material'

import SettingsAvatar from '../../../../../public/assets/messianic-times/SettingsAvatar.webp'
import SubscribeForMore from '../../../../../components/auth/SubscribeForMore'

import imageUrlBuilder from '@sanity/image-url'
import { groq } from 'next-sanity'
import { client } from '../../../../../sanity/lib/client'
const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}
export const revalidate = 60 * 60 * 24 // revalidate every 1 day

// get all slugs for posts to statically generate them and reduce api requests to sanity
export async function generateStaticParams() {
  const query = groq`
    *[_type=='post']
      {
        slug
      }
    `

  const slugs = await client.fetch(query)
  const slugRoutes = slugs.map(slug => {
    slug.slug.current
  })

  return slugRoutes.map(slug => {
    slug
  })
}

export default async function page({ params }) {
  /* const DefaultAuthorView = dynamic(
    () =>
      import('../../../components/sanity/Content/Authors/DefaultAuthorView'),
    {
      ssr: false,
    }
  );

  */

  const slug = params.slug
  const query = groq`
  *[_type match 'post' && slug.current match '${slug}'] {
  ...,
  release_months,
  author->,
  categories[]->
}`

  const FetchedPost = await client.fetch(query)
  const post = FetchedPost[0]

  post.image = urlFor(post.mainImage).width(800).url()

  if (post.author.image.asset) {
    post.author.image = urlFor(post.author.image).width(500).url()
  } else {
    post.author.image = SettingsAvatar.src
  }
  if (!post) return 'That post does not exist'

  return (
    <Container sx={{ my: 2, py: 2, backgroundColor: 'white' }}>
      <Typography color='black' variant='h3' textAlign={'center'}>
        {post.title}
      </Typography>
      <DefaultArticleView post={post} />

      <SubscribeForMore />

      <Link href='/posts'>
        <Button sx={{ my: 3 }} variant='outlined'>
          Back
        </Button>
      </Link>
    </Container>
  )
}
