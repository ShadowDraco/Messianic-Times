'use client'
import React, { useRef } from 'react'
import {
  Container,
  Box,
  Typography,
  IconButton,
  Input,
  FormControl,
  InputLabel,
} from '@mui/material'
export default function page() {
  const titleRef = useRef(null)
  const descRef = useRef(null)
  const emailRef = useRef(null)
  const nameRef = useRef(null)
  const importantRef = useRef(null)

  /*
    TICKET SCHEMA 
    title String
    description String
    email String
    name String
    important Boolean?
*/
  return (
    <Container>
      <Typography variant='h4'>Contact us</Typography>
      <FormControl>
        <InputLabel htmlFor='title'>Title</InputLabel>
        <Input
          type='text'
          id='title'
          placeholder='title'
          ref={titleRef}
        ></Input>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor='description'>Description</InputLabel>
        <Input
          type='text'
          id='description'
          placeholder='description'
          ref={descRef}
        ></Input>
      </FormControl>

      <FormControl>
        <InputLabel htmlFor='name'>Name</InputLabel>
        <Input type='text' id='name' placeholder='Name' ref={nameRef}></Input>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor='email'>Email</InputLabel>
        <Input
          type='text'
          id='email'
          placeholder='email'
          ref={emailRef}
        ></Input>
      </FormControl>
      <Typography variant='overline'>Important? </Typography>
      <FormControl>
        <Input type='checkbox' id='important' ref={importantRef}></Input>
      </FormControl>
    </Container>
  )
}
