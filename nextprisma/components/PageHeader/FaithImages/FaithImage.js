import React from 'react'
import Image from 'next/image'
import SyncedBreath from '../../../components/motion/breath/SyncedBreath'
export default function FaithImage({ size, img }) {
  if (size > 800) size = 800
  return (
    <SyncedBreath>
      <Image
        src={img}
        width={size * 0.2}
        height={size * 0.15}
        alt={'Sharing Faith link'}
      />
    </SyncedBreath>
  )
}
