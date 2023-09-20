import React from 'react'
import { Container, Box, Typography, Button } from '@mui/material'
import BoardMemberCard from './BoardMemberCard'
import PaulImage from '../../public/assets/board-members/Paul.webp'
import Link from 'next/link'
export default function AboutPage() {
  return (
    <Container>
      <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
        <BoardMemberCard image={PaulImage} name='Paul Lieberman' />
        <Typography textAlign='center' color='HighlightText' variant='body1'>
          We believe the Biblical drama intends that the Jewish people will be
          back in the Land of Israel living in peace. This will happen through a
          joint project undertaken by both Jews and Gentiles. This physical
          occurrence parallels a spiritual ingathering of being restored to
          intimate fellowship with God, through the acceptance of His son,
          Messiah Yeshua (Jesus).
        </Typography>
      </Box>
      <Link href='/'>
        <Button>Home</Button>
      </Link>
    </Container>
  )
}
