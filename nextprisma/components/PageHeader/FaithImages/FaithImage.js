import React from 'react'
import Image from 'next/image'
import SyncedBreath from '../../../components/motion/breath/SyncedBreath'
export default function FaithImage({ size, img }) {
  if (size > 800) size = 800
  return (
    <SyncedBreath width='100%'>
      <Image
        src={img}
        width={size * 0.15}
        height={size * 0.1}
        alt={'Sharing Faith link'}
      />
    </SyncedBreath>
  )
}
