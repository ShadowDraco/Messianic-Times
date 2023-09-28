import React from 'react'
import { Container, Box, Typography, Button } from '@mui/material'
import BoardMemberCard from './BoardMemberCard'
import PaulImage from '../../../public/assets/board-members/Paul.webp'
import CalImage from '../../../public/assets/board-members/Cal.webp'
import JeffImage from '../../../public/assets/board-members/Jeff.webp'
import JoelImage from '../../../public/assets/board-members/Joel.webp'
import SusanImage from '../../../public/assets/board-members/Susan.webp'
import Link from 'next/link'
export default function AboutPage() {
  return (
    <Container sx={{ my: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
        <Typography variant='h3' color='white'>
          Meet our board of directors!
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: 3, alignItems: 'center', my: 2 }}>
        <BoardMemberCard image={PaulImage} name='Paul Lieberman' />
        <Typography
          textAlign='center'
          color='HighlightText'
          variant='body1'
          maxWidth='50%'
        >
          We believe the Biblical drama intends that the Jewish people will be
          back in the Land of Israel living in peace. This will happen through a
          joint project undertaken by both Jews and Gentiles. This physical
          occurrence parallels a spiritual ingathering of being restored to
          intimate fellowship with God, through the acceptance of His son,
          Messiah Yeshua (Jesus).
        </Typography>
      </Box>

      <Box
        sx={{
          my: 2,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 2,
        }}
      >
        <BoardMemberCard
          image={JeffImage}
          name='Jeff Forman'
          description={[
            'Founder, City of David Messianic Synagogue',
            'Executive Director Messianic Mandate',
            'Executive Member, Council of Messianic Jewish Congregations of Alberta',
            'The United Messianic Jewish Outreach, Inc.',
          ]}
        />
        <BoardMemberCard
          image={CalImage}
          name='Calev Goldberg'
          description={[
            'Founder, Congregation Beth Shechinah',
            'Interim President, Messianic Jewish Alliance of Canada',
            'MJAA, IAMCS, JVMC, ReachII, MI',
          ]}
        />

        <BoardMemberCard
          image={JoelImage}
          name='Joel Lieberman'
          description={[
            'Rabbi, Tree of Life Messianic Jewish Congregation,',
            'President, Messianic Jewish Alliance of America',
            "Intl Alliance of Messianic Cong's &amp; Synagogues",
          ]}
        />
        <BoardMemberCard
          image={SusanImage}
          name='Susan Perlman'
          description={[
            'Co-Founder of Jews for Jesus',
            'Chief Partnership Officer, Jews for Jesus',
            'Sought after speaker and presenter at churches, theological institutions, messianic congregations and other missions',
            'Published author of evangelistic materials from tracts, skits, blogs, and apologetic articles',
          ]}
        />
      </Box>
    </Container>
  )
}
