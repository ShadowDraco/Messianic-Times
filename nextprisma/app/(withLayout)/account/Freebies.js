'use client'
import React, { useRef, useState } from 'react'
import {
  Box,
  Container,
  Button,
  Typography,
  Input,
  Fab,
  InputLabel,
} from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
import Checkbox from '@mui/material/Checkbox'
import EditIcon from '@mui/icons-material/Edit'
import { Save, ViewArray } from '@mui/icons-material'

export default function Freebies({ session, update }) {
  if (!session) return 'Please Log in First'
  const nameRef = useRef(null)
  const phoneRef = useRef(null)
  const [saving, setSaving] = useState(false)
  const [editing, setEditing] = useState(false)
  const [emails, setEmails] = useState(session.user.emailPreferences)
  const [sms, setSms] = useState(session.user.phonePreferences)
  const [autoPlay, setAutoPlay] = useState(session.user.autoPlay)
  const handleEditing = e => {
    setEditing(!editing)
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
          <ViewArray />
        </Fab>
        <Typography>Benefits and Features</Typography>
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
            <InputLabel htmlFor='emails'>Receive emails?</InputLabel>
            <Checkbox
              id='emails'
              checked={emails}
              onChange={e => {
                setEmails(e.target.checked)
              }}
            />
            <InputLabel htmlFor='sms'>Receive SMS?</InputLabel>
            <Checkbox
              id='sms'
              checked={sms}
              onChange={e => {
                setSms(e.target.checked)
              }}
            />
            <InputLabel htmlFor='autoplay music'>Autoplay Music?</InputLabel>
            <Checkbox
              id='autoplay music'
              checked={autoPlay}
              onChange={e => {
                setAutoPlay(e.target.checked)
              }}
            />
          </Box>
          <LoadingButton
            onClick={() => {
              update({
                emailPreferences: emails,
                phonePreferences: sms,
                autoPlay,
                phoneNumber: phoneRef.current.value,
                name: nameRef.current.value,
              })
            }}
            loading={saving}
            endIcon={<Save />}
          >
            Save
          </LoadingButton>
        </Container>
      )}
    </Box>
  )
}
