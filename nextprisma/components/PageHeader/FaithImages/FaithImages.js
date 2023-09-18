import React from 'react'
import SharingFaith from '../../../public/assets/SharingFaith.png'
import CelebratingFaith from '../../../public/assets/CelebratingFaith.png'
import IntersectingFaith from '../../../public/assets/IntersectingFaith.png'
import CommunityFaith from '../../../public/assets/CommunityFaith.png'
import FaithImage from './FaithImage'
import Link from 'next/link'
export default function FaithImages({ size }) {
  return (
    <>
      <Link href='/previews/sharing-faith'>
        <FaithImage size={size} img={SharingFaith.src} />
      </Link>
      <FaithImage size={size} img={CelebratingFaith.src} />
      <FaithImage size={size} img={IntersectingFaith.src} />
      <FaithImage size={size} img={CommunityFaith.src} />
    </>
  )
}
