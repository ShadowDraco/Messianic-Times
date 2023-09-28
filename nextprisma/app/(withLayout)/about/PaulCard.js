import React from 'react'

import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Stack,
} from '@mui/material'
import Image from 'next/image'

export default function BoardMemberCard({ image, description, name }) {
  return (
    <Card
      sx={{ maxWidth: 350, minWidth: 150, backgroundColor: 'rgb(24, 46, 66)' }}
    >
      <CardActionArea>
        <Image
          height={image.height}
          width={image.width}
          src={image.src}
          objectFit='cover'
          layout='responsive'
          alt='Board member'
          style={{ maxHeight: 250, minWidth: 150 }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant='h5'
            component='div'
            color='white'
            textAlign={'center'}
          >
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
