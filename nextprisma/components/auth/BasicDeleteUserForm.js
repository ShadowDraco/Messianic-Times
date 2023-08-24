'use client';
import {
  Box,
  FormControl,
  Typography,
  Input,
  InputLabel,
  Button,
} from '@mui/material';
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
    <Box className='my-2'>
      <Typography variant='body2'>Delete a User</Typography>
      <Box className='flex align-middle'>
        <FormControl>
          <InputLabel htmlFor='delete-email'>Email: </InputLabel>{' '}
          <Input
            ref={emailRef}
            id='delete-email'
            placeholder='email'
          />
        </FormControl>
        <Button
          onClick={e => {
            handleDeleteUser(emailRef.current.value);
          }}
        >
          Delete
        </Button>
        <Typography color={successMessage === 'success!' ? 'green' : 'red'}>
          {successMessage}
        </Typography>
      </Box>
    </Box>
  );
}
