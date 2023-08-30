'use client';
import React from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
export default function page() {
  return (
    <div>
      There was an error with your sign in!
      <br></br>
      This was most likely caused by having previously clicked the link.
      <br></br>
      <Link href='/'>Home</Link>
      <button
        onClick={() => {
          signIn();
        }}
      >
        Sign in
      </button>
    </div>
  );
}
