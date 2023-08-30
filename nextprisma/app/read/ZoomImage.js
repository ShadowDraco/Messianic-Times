import React, { Component } from 'react';

import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import Image from 'next/image';
const ZoomImage = ({ image }) => {
  return (
    <TransformWrapper>
      <TransformComponent>
        <Image
          src={image.src}
          width={500}
          height={500}
          alt='NewsPaper Page'
        />
      </TransformComponent>
    </TransformWrapper>
  );
};

export default ZoomImage;
