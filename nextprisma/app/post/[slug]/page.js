import React from 'react';
import { groq } from 'next-sanity';
import dynamic from 'next/dynamic';
import { client } from '../../../sanity/lib/client';
import DefaultAuthorView from '../../../components/sanity/Content/Authors/DefaultAuthorView';
import Link from 'next/link';
import { Button, Container, Typography } from '@mui/material';

export const revalidate = 30; // revalidate every 30 second

// get all slugs for posts to statically generate them and reduce api requests to sanity
export async function generateStaticParams() {
  const query = groq`
    *[_type=='post']
      {
        slug
      }
    `;

  const slugs = await client.fetch(query);
  const slugRoutes = slugs.map(slug => {
    slug.slug.current;
  });

  return slugRoutes.map(slug => {
    slug;
  });
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

  const slug = params.slug;
  const query = groq`
  *[_type match 'post' && slug.current match '${slug}'] {
  ...,
  image->,
  mainImage->,
  author->,
  categories[]->
}`;

  const FetchedPost = await client.fetch(query);
  const post = FetchedPost[0];

  if (!post) return 'That post does not exist';

  return (
    <Container sx={{ my: 2 }}>
      <Typography color='white'>Article Page for {post.title}</Typography>
      <DefaultAuthorView author={post.author} />
      <Link href='/'>
        <Button
          sx={{ my: 3 }}
          variant='outlined'
        >
          Home
        </Button>
      </Link>

      <Link href='/posts'>
        <Button
          sx={{ my: 3 }}
          variant='outlined'
        >
          Posts
        </Button>
      </Link>
    </Container>
  );
}