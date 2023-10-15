'use client'
import React, { useState } from 'react'
import { Button } from '@mui/material'
import { useSession } from 'next-auth/react'
export default function FreePaperButton({ session, update }) {
  const [loading, setLoading] = useState(false)
  const getFreePaper = async () => {
    setLoading(true)
    const response = await fetch('/api/free-stuff/get-trial-paper', {
      method: 'POST',
      body: JSON.stringify({ email: session.user.email }),
    })
    const body = await response.json()
    update({
      hasFreePaper: body.hasFreePaper,
      whichFreePaper: body.whichFreePaper,
    })
    setLoading(false)
  }
  return (
    <Button
      disabled={loading}
      onClick={async () => {
        await getFreePaper()
      }}
    >
      Get a free paper now!
    </Button>
  )
}
