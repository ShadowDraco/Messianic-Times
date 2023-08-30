import React from 'react';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from '@mui/material';
import Image from 'next/image';

export default function BoardMemberCard({ image, description, name }) {
  return (
    <Card sx={{ maxWidth: 500, minWidth: '25%'}}>
      <CardActionArea>
        <Image
          height={image.height}
          width={image.width}
          src={image.src}
          alt='Paul Lieberman'
        />
        <CardContent>
          <Typography
            gutterBottom
            variant='h5'
            component='div'
          >
            {name}
          </Typography>
          <Typography
            variant='body2'
            color='text.secondary'
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
