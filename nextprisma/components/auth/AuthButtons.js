'use client';
import { Box, Button } from '@mui/material';
import React from 'react';
import { signIn, signOut } from 'next-auth/react';
export default function AuthButtons() {
  return (
    <Box>
      <Button onClick={() => signIn()}>Sign in</Button>
      <Button onClick={() => signOut()}>Sign out</Button>
    </Box>
  );
}
