import React from 'react';

export default function page() {
  return (
    <div>
      you were successfully subscribed! Please log in again to continue!
      <a href='/api/auth/signin'>Sign in Here!</a>
    </div>
  );
}
