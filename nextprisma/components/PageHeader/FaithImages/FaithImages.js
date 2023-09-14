import React from 'react'
import SharingFaith from '../../../public/assets/SharingFaith.png'
import CelebratingFaith from '../../../public/assets/CelebratingFaith.png'
import IntersectingFaith from '../../../public/assets/IntersectingFaith.png'
import CommunityFaith from '../../../public/assets/CommunityFaith.png'
import FaithImage from './FaithImage'

export default function FaithImages({ size }) {
  return (
    <>
      <FaithImage size={size} img={SharingFaith.src} />
      <FaithImage size={size} img={CelebratingFaith.src} />
      <FaithImage size={size} img={IntersectingFaith.src} />
      <FaithImage size={size} img={CommunityFaith.src} />
    </>
  )
}
