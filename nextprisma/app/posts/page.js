import React from 'react';

import { groq } from 'next-sanity';
import dynamic from 'next/dynamic';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { client } from '../../sanity/lib/client';
export default async function page() {
  const PostsPage = dynamic(() => import('./PostsPage'), {
    ssr: false,
  });
  const session = await getServerSession(authOptions);

  const query = groq`
    *[_type == "post"]
  `;
  const posts = await client.fetch(query);

  return (
    <PostsPage
      posts={posts}
      session={session}
    />
  );
}
