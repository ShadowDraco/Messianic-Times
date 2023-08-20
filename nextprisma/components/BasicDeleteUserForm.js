'use client';
import React, { useState, useRef } from 'react';

export default function BasicDeleteUserForm() {
  const emailRef = useRef(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleDeleteUser = async email => {
    let response = await fetch(`/api/user/delete/${email}`, {
      method: 'POST',
    });

    if (response?.statusText) {
      setSuccessMessage(response.statusText);
    }
  };

  return (
    <div>
      <label htmlFor='delete-by-email'>Delete user: </label>{' '}
      <input
        ref={emailRef}
        id='delete-by-email'
        placeholder='email'
      />
      <button
        onClick={e => {
          handleDeleteUser(emailRef.current.value);
        }}
      >
        Delete
      </button>
      <p color={successMessage === 'success!' ? 'green' : 'red'}>
        {successMessage}
      </p>
    </div>
  );
}
