import React from 'react'
import Image from 'next/image'
import SyncedBreath from '../../../components/motion/breath/SyncedBreath'
export default function FaithImage({ size, img }) {
  if (size > 800) size = 800
  if (size < 570) size = 570
  return (
    <SyncedBreath width='100%'>
      <Image
        src={img}
        width={size * 0.3}
        height={size * 0.22}
        alt={'Sharing Faith link'}
        priority={true}
      />
    </SyncedBreath>
  )
}
