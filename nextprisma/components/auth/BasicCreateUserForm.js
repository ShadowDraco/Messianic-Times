'use client';
import React, { useState, useRef } from 'react';

export default function BasicCreateUserForm() {
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleCreateUser = async () => {
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = passwordRef.current.value;

    let response = await fetch(
      `/api/database/user/create/${email}/${name}/${password}`,
      {
        method: 'POST',
      }
    );
    if (response?.statusText) {
      setSuccessMessage(response.statusText);
    }
  };

  return (
    <div>
      <label htmlFor='create-email'>Email: </label>{' '}
      <input
        ref={emailRef}
        id='create-email'
        placeholder='email'
      />
      <label htmlFor='create-name'>Name: </label>{' '}
      <input
        ref={nameRef}
        id='create-name'
        placeholder='name'
      />
      <label htmlFor='create-password'>Password: </label>{' '}
      <input
        ref={passwordRef}
        id='create-password'
        placeholder='password'
      />
      <button
        onClick={() => {
          handleCreateUser();
        }}
      >
        Create
      </button>
      <p color={successMessage === 'success!' ? 'green' : 'red'}>
        {successMessage}
      </p>
    </div>
  );
}
