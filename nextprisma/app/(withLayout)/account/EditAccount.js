'use client'
import React, { useRef, useState } from 'react'
import {
  Box,
  Button,
  Container,
  Typography,
  Input,
  Fab,
  InputLabel,
  Stack,
  Slider,
  FormGroup,
} from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import EditIcon from '@mui/icons-material/Edit'
import { Save, VolumeUp } from '@mui/icons-material'

export default function EditAccount({ session, update }) {
  if (!session) return ''
  const nameRef = useRef(null)
  const phoneRef = useRef(null)
  const [saving, setSaving] = useState(false)
  const [editing, setEditing] = useState(false)
  const [emails, setEmails] = useState(session.user.emailPreferences)
  const [sms, setSms] = useState(session.user.phonePreferences)
  const [autoPlay, setAutoPlay] = useState(session.user.autoPlay)
  const [volume, setVolume] = useState(
    session.user.volume ? session.user.volume : 20
  )
  const handleEditing = e => {
    setEditing(!editing)
  }

  const changeVolume = (e, newValue) => {
    setVolume(newValue)
  }

  const updateAccount = () => {
    setSaving(true)
    update({
      emailPreferences: emails,
      phonePreferences: sms,
      autoPlay,
      phoneNumber: phoneRef.current.value,
      name: nameRef.current.value,
      volume: volume
    })
    fetch('/api/database/user/update', {
      method: 'POST',
      body: JSON.stringify({
        emailPreferences: emails,
        phonePreferences: sms,
        autoPlay,
        phoneNumber: phoneRef.current.value,
        name: nameRef.current.value,
        email: session.user.email,
        volume: volume,
      }),
    })
    setSaving(false)
  }
  return (
    <Box>
      <Box sx={{ py: 2, display: 'flex', gap: 1, alignItems: 'center' }}>
        <Fab
          color='primary'
          aria-label='edit'
          onClick={handleEditing}
          size='small'
        >
          <EditIcon />
        </Fab>
        <Typography>Edit Account</Typography>
      </Box>

      {editing && (
        <Container sx={{ py: 2 }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, py: 2 }}>
            <Input
              id='name'
              type='text'
              placeholder='Name'
              inputRef={nameRef}
              defaultValue={session.user.name}
            />
            <Input
              id='name'
              type='tel'
              placeholder='Phone'
              defaultValue={session.user.phoneNumber}
              inputRef={phoneRef}
            />
          </Box>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, py: 2 }}>
            <FormGroup>
              <InputLabel htmlFor='emails'>Receive emails?</InputLabel>
              <Checkbox
                id='emails'
                checked={emails}
                onChange={e => {
                  setEmails(e.target.checked)
                }}
              />
            </FormGroup>
            <FormGroup>
              <InputLabel htmlFor='sms'>Receive SMS?</InputLabel>
              <Checkbox
                id='sms'
                checked={sms}
                onChange={e => {
                  setSms(e.target.checked)
                }}
              />
            </FormGroup>
            <FormGroup>
              <InputLabel htmlFor='autoplay music'>Autoplay Music?</InputLabel>
              <Checkbox
                id='autoplay music'
                checked={autoPlay}
                onChange={e => {
                  setAutoPlay(e.target.checked)
                }}
              />
            </FormGroup>
          </Box>
          <Stack
            spacing={1}
            direction='row'
            sx={{ mx: 1, mb: 1 }}
            alignItems='center'
          >
            {' '}
            <Typography>Music Volume: </Typography>
            <Slider
              aria-label='Volume'
              value={volume}
              max={100}
              onChange={changeVolume}
            />
            <VolumeUp />
          </Stack>
          <Button
            onClick={() => {
              updateAccount()
            }}
            disabled={saving}
            endIcon={<Save />}
          >
            Save
          </Button>
        </Container>
      )}
    </Box>
  )
}
