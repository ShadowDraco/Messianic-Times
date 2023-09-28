import React from 'react'

import {
  Card,
  CardContent,
  CardMedia,
  Box,
  Typography,
  CardActionArea,
  Stack,
} from '@mui/material'
import Image from 'next/image'

export default function BoardMemberCard({ image, description, name }) {
  return (
    <Card sx={{ maxWidth: 350, minWidth: 100, backgroundColor: 'transparent' }}>
      <CardActionArea>
        <Image
          height={image.height}
          width={image.width}
          src={image.src}
          objectFit='cover'
          layout='responsive'
          alt='Board member'
          style={{ maxHeight: 250, minWidth: 100 }}
        />
        <CardContent sx={{ backgroundColor: 'transparent' }}>
          <Typography gutterBottom variant='h5' component='div' color='white'>
            {name}
          </Typography>
          <Stack spacing={1}>
            {description?.map((item, i) => {
              return (
                <Typography key={i} variant='caption' color='#ddd'>
                  {item}
                </Typography>
              )
            })}
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
