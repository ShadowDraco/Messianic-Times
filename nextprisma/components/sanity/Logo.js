import Image from 'next/image';
import React from 'react';
import MTLogoImage from '../../assets/MTLogo.png';

export default function Logo() {
  return (
    <Image
      className='rounded-full object-cover'
      height={50}
      width={50}
      alt='MT Logo'
      src={MTLogoImage}
    />
  );
}
