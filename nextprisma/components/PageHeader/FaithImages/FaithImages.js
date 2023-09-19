import React from 'react'
import SharingFaith from '../../../public/assets/faith-images/SharingFaith.png'
import CelebratingFaith from '../../../public/assets/faith-images/CelebratingFaith.png'
import IntersectingFaith from '../../../public/assets/faith-images/IntersectingFaith.png'
import CommunityFaith from '../../../public/assets/faith-images/CommunityFaith.png'
import FaithImage from './FaithImage'
import Link from 'next/link'
export default function FaithImages({ size }) {
  return (
    <>
      <Link href='/previews/sharing-faith'>
        <FaithImage size={size} img={SharingFaith.src} />
      </Link>
      <Link href='/previews/celebrating-faith'>
        <FaithImage size={size} img={CelebratingFaith.src} />
      </Link>
      <Link href='/previews/intersecting-faith'>
        <FaithImage size={size} img={IntersectingFaith.src} />
      </Link>
      <Link href='/previews/community-faith'>
        <FaithImage size={size} img={CommunityFaith.src} />
      </Link>
    </>
  )
}
