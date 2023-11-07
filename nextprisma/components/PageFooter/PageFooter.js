import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import FooterButtons from './FooterButtons'

export default function PageFooter() {
  return (
    <>
      <Container
        maxWidth='1350'
        width='95%'
        component='footer'
        sx={{
          borderTop: `1px solid black`,
          py: 2,
          mt: 2,
          backgroundColor: '#3499D9',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            alignItems: 'center',
            flexWrap: { xs: 'wrap', md: 'wrap', lg: 'nowrap' },
            my: 3,
          }}
        >
          <Typography
            variant={'body1'}
            color={'white'}
            maxWidth={{ xs: '90%', md: '90%', lg: '50%' }}
          >
            With the Messianic Times you can: read news from the worldwide
            Messianic community, Israeli current events and analysis, opinion
            pieces, book, music and film reviews, informative articles and a
            directory of Messianic Jewish congregations.
          </Typography>
          <FooterButtons />
        </Box>
        <Typography variant='caption'>
          Copyright © 2023 Messianic Times
        </Typography>
      </Container>
    </>
  )
}
