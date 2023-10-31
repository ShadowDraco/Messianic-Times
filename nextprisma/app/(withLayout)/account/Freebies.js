'use client'
import React, { useState } from 'react'
import { Box, Typography, Fab } from '@mui/material'
import AppsIcon from '@mui/icons-material/Apps'
import Image from 'next/image'
import { useWindowContext } from '../../Providers'
import FreePaperButton from './FreePaperButton'
import Link from 'next/link'

export default function Freebies({ session, update }) {
  if (!session) return ''
  const user = session.user
  const { timesWidth, timesHeight } = useWindowContext()
  const [editing, setEditing] = useState(false)

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
          <AppsIcon />
        </Fab>

        <Typography>Benefits and Features</Typography>
      </Box>
      {editing && (
        <Box>
          {user.hasFreePaper ? (
            <Box className='hoverDarken' sx={{ transition: '1s' }}>
              <Link href={`/trialPaper/${user.whichFreePaper}`}>
                <Image
                  src={`/assets/papers/NewspaperCovers/${user.whichFreePaper}.webp`}
                  width={timesWidth / 3}
                  height={timesHeight * 4}
                  alt={'Free Paper'}
                  style={{ maxWidth: 200, maxHeight: 300 }}
                  priority
                />
              </Link>
            </Box>
          ) : (
            <FreePaperButton session={session} update={update} />
          )}
        </Box>
      )}
    </Box>
  )
}
