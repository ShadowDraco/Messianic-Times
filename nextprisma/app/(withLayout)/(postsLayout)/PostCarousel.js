'use client'

import React from 'react'
// requires a loader
import { Carousel } from 'react-responsive-carousel'
import Image from 'next/image'

export default function PostCarousel({ posts }) {
  return (
    <Carousel showArrows={true}>
      {posts.map((post, i) => {
        return (
          <Image
            key={i}
            src={post.image}
            width={500}
            height={500}
            alt={post.title}
            layout='responsive'
            style={{ maxWidth: '500' }}
          />
        )
      })}
    </Carousel>
  )
}
