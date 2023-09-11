'use client'
import React, { useRef, useState } from 'react'
import {
  Container,
  Box,
  Typography,
  IconButton,
  Button,
  Input,
  FormControl,
  InputLabel,
} from '@mui/material'
import { LoadingButton } from '@mui/lab'
export default function page() {
  const titleRef = useRef(null)
  const descRef = useRef(null)
  const emailRef = useRef(null)
  const nameRef = useRef(null)
  const importantRef = useRef(null)

  const [loading, setLoading] = useState(false)
  /*
    TICKET SCHEMA 
    title String
    description String
    email String
    name String
    important Boolean?
*/
  const submitTicket = async () => {
    setLoading(true)
    const title = titleRef.current.value
    const desc = descRef.current.value
    const email = emailRef.current.value
    const name = nameRef.current.value
    const important = importantRef.current.checked

    console.log({ title, desc, email, name })
    if (title && desc && email && name) {
      let ticketRequest = await fetch('/api/tickets', {
        method: 'POST',
        body: JSON.stringify({ title, name, desc, email, important }),
      })

      setLoading(false)
      return
    }
    console.log('Form incomplete')
    setLoading(false)
  }

  return (
    <Container>
      <Typography variant='h4'>Contact us</Typography>
      <FormControl>
        <InputLabel htmlFor='title'>Title</InputLabel>
        <Input
          type='text'
          id='title'
          placeholder='title'
          inputRef={titleRef}
        ></Input>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor='description'>Description</InputLabel>
        <Input
          type='text'
          id='description'
          placeholder='description'
          inputRef={descRef}
        ></Input>
      </FormControl>

      <FormControl>
        <InputLabel htmlFor='name'>Name</InputLabel>
        <Input
          type='text'
          id='name'
          placeholder='Name'
          inputRef={nameRef}
        ></Input>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor='email'>Email</InputLabel>
        <Input
          type='text'
          id='email'
          placeholder='email'
          inputRef={emailRef}
        ></Input>
      </FormControl>
      <Typography variant='overline'>Important? </Typography>
      <FormControl>
        <Input type='checkbox' id='important' inputRef={importantRef}></Input>
      </FormControl>

      <LoadingButton
        loading={loading}
        loadingPosition='end'
        onClick={e => {
          submitTicket()
        }}
      >
        <span>Send</span>
      </LoadingButton>
    </Container>
  )
}
