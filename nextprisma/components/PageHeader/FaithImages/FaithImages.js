'use client'
import { useState, useEffect } from 'react'
import { useWindowContext } from '../../../app/Providers'
import Box from '@mui/material/Box'
import React from 'react'
import SharingFaith from '../../../public/assets/faith-images/SharingFaith.webp'
import CelebratingFaith from '../../../public/assets/faith-images/CelebratingFaith.webp'
import IntersectingFaith from '../../../public/assets/faith-images/IntersectingFaith.webp'
import CommunityFaith from '../../../public/assets/faith-images/CommunityFaith.webp'
import FaithImage from './FaithImage'
import Link from 'next/link'
export default function FaithImages() {
  const { timesWidth, timesHeight } = useWindowContext()
  const [spaceType, setSpaceType] = useState('space-between')
  useEffect(() => {
    if (timesWidth < 500) {
      setSpaceType('space-evenly')
    } else {
      setSpaceType('space-between')
    }
  }, [timesWidth])
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: spaceType,

        paddingY: 1,
        maxWidth: '1350px',
        margin: 'auto',
        width: '100%',
        my: 0,
      }}
    >
      <Link href='/previews/sharing-faith'>
        <FaithImage size={timesWidth} img={SharingFaith.src} />
      </Link>
      <Link href='/previews/celebrating-faith'>
        <FaithImage size={timesWidth} img={CelebratingFaith.src} />
      </Link>
      <Link href='/previews/intersecting-faith'>
        <FaithImage size={timesWidth} img={IntersectingFaith.src} />
      </Link>
      <Link href='/previews/community-faith'>
        <FaithImage size={timesWidth} img={CommunityFaith.src} />
      </Link>
    </Box>
  )
}
