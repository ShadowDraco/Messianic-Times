'use client';
import React, { useState, useRef } from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  Input,
  Button,
  Typography,
} from '@mui/material';
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
    <Box className='my-2'>
      <Typography variant='body2'>Create a User</Typography>
      <Box className='flex align-middle'>
        <FormControl>
          <InputLabel htmlFor='create-email'>Email: </InputLabel>{' '}
          <Input
            ref={emailRef}
            id='create-email'
            placeholder='email'
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor='create-name'>Name: </InputLabel>{' '}
          <Input
            ref={nameRef}
            id='create-name'
            placeholder='name'
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor='create-password'>Password: </InputLabel>{' '}
          <Input
            ref={passwordRef}
            id='create-password'
            placeholder='password'
          />
        </FormControl>
        <Button
          onClick={() => {
            handleCreateUser();
          }}
        >
          Create
        </Button>
        <Typography color={successMessage === 'success!' ? 'green' : 'red'}>
          {successMessage}
        </Typography>
      </Box>
    </Box>
  );
}
