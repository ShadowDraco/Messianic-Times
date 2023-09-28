import React from 'react';
import { groq } from 'next-sanity';
import dynamic from 'next/dynamic';
import { previewClient } from '../../../../../sanity/lib/client';
import Link from 'next/link';
import { Button, Container, Typography } from '@mui/material';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../api/auth//[...nextauth]/route';
export default async function page({ params }) {
  const session = await getServerSession(authOptions);

  const DefaultAuthorView = dynamic(
    () =>
      import('../../../../components/sanity/Content/Authors/DefaultAuthorView'),
    {
      ssr: false,
    }
  );
  const { docId } = params;

  if (!docId || !session) {
    return 'You must be logged in, or that document does not exist';
  }
  const query = groq`
*[_type match 'post' && _originalId match $docId] {
  ...,
  image->,
  mainImage->,
  author->,
  categories[]->
}`;

  const FetchedPost = await previewClient.fetch(query, { docId: docId });
  const post = FetchedPost[0];

  if (!post) return 'That post preview does not exist';

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
    </Container>
  );
}
