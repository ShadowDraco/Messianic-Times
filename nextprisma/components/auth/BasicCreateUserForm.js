'use client'
import React, { useState, useRef } from 'react'
import {
  Box,
  FormControl,
  InputLabel,
  Input,
  Button,
  Typography,
} from '@mui/material'
export default function BasicCreateUserForm() {
  const emailRef = useRef(null)
  const nameRef = useRef(null)
  const passwordRef = useRef(null)
  const [successMessage, setSuccessMessage] = useState('')

  const handleCreateUser = async () => {
    setSuccessMessage('. . .')
    const email = emailRef.current.value
    const name = nameRef.current.value
    const password = passwordRef.current.value

    let res = await fetch(
      `/api/database/user/create/${email}/${name}/${password}`,
      {
        method: 'POST',
      }
    )
    const response = await res.json()

    if (response?.message) {
      setSuccessMessage(response.message)
    }
    if (response?.statusText) {
      setSuccessMessage(response.statusText)
    }

    if (response?.error) {
      setSuccessMessage(response.error)
    }
  }

  return (
    <Box sx={{ my: 2 }}>
      <Typography variant='h6'>Sign up!</Typography>
      <Typography variant='body1' color='black' sx={{ py: 2 }}>
        Join The Messianic Times to gain access to subscriptions and many new
        features!{' '}
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
        <FormControl>
          <InputLabel htmlFor='create-email'>Email: </InputLabel>{' '}
          <Input inputRef={emailRef} id='create-email' placeholder='email' />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor='create-name'>Name: </InputLabel>{' '}
          <Input inputRef={nameRef} id='create-name' placeholder='name' />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor='create-password'>Password: </InputLabel>{' '}
          <Input
            inputRef={passwordRef}
            id='create-password'
            placeholder='password'
          />
        </FormControl>
        <Button
          onClick={() => {
            handleCreateUser()
          }}
        >
          Join!
        </Button>
      </Box>
      <Typography
        variant='h6'
        color={
          successMessage === 'User created > Please Check your Email <' ||
          successMessage === 'success!'
            ? 'green'
            : 'red'
        }
      >
        {successMessage}
      </Typography>
    </Box>
  )
}
