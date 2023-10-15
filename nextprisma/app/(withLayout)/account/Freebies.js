'use client'
import React, { useState } from 'react'
import { Box, Typography, Fab } from '@mui/material'
import AppsIcon from '@mui/icons-material/Apps'
import Image from 'next/image'
import { useWindowContext } from '../../Providers'
import FreePaperButton from './FreePaperButton'
import Link from 'next/link'
import { NewspaperCovers } from '../../../public/assets/papers/NewspaperScreenshots/Newspaper'
export default function Freebies({ session, update }) {
  if (!session) return ''
  const user = session.user
  const paperDirectory = NewspaperCovers[user.whichFreePaper]

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
                  src={paperDirectory.src}
                  width={timesWidth / 3}
                  height={timesHeight * 4}
                  alt={'Free Paper'}
                  style={{ maxWidth: 200, maxHeight: 300 }}
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
