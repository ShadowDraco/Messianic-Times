import React from 'react'
import { Container, Box, Typography, Button, Stack } from '@mui/material'
import BoardMemberCard from './BoardMemberCard'
import PaulCard from './PaulCard'
import PaulImage from '../../../public/assets/board-members/Paul.webp'
import CalImage from '../../../public/assets/board-members/Cal.webp'
import JeffImage from '../../../public/assets/board-members/Jeff.webp'
import JoelImage from '../../../public/assets/board-members/Joel.webp'
import SusanImage from '../../../public/assets/board-members/Susan2.webp'
import FrankImage from '../../../public/assets/board-members/Frank.webp'
import LitePlayer from '../../../components/videoPlayer/LitePlayer'

export default function AboutPage() {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        paddingBottom: 3,
        maxWidth: 1347,
        margin: 'auto',

        my: 3,
      }}
    >
      <Box sx={{ backgroundColor: '#B5DBFF', py: 4 }}>
        <Typography
          variant='h3'
          color='rgb(24, 46, 66)'
          textAlign={'center'}
          mb={2}
        >
          We are more than a newspaper!
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <LitePlayer />
        </Box>
      </Box>

      <Box sx={{ backgroundColor: 'white', py: 3 }}>
        <Typography variant='h3' color='black' textAlign={'center'}>
          Our Vision
        </Typography>
      </Box>

      <Box
        sx={{
          my: 2,
          p: 2,
          gap: 5,
        }}
      >
        <Typography
          variant='h5'
          color='black'
          maxWidth={'100%'}
          textAlign={'center'}
        >
          To fulfill the need for Jews to come to Yeshua, we wish to invite all
          people to be apart of the Messianic and Jewish communities. The
          Messianic Times is a coalition of culture, resources, and information
          for the Community of Faith.
        </Typography>
      </Box>

      <Box sx={{ backgroundColor: 'white', py: 1 }}>
        <Typography variant='h4' color='rgb(24, 46, 66)' textAlign={'center'}>
          What we do
        </Typography>
      </Box>

      <Box
        sx={{
          pt: 3,
          pb: 3,
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
          flexWrap: 'wrap',
        }}
      >
        <Button variant='contained'>Prison ministry</Button>

        <Button variant='contained'>Connect many Congregations</Button>
        <Button variant='contained'>
          Scholarship fund for messianic Jewish leaders
        </Button>
        <Button variant='contained'>
          Give a voice for messianic Judaism from various backgrounds
        </Button>
      </Box>

      <Box sx={{ backgroundColor: 'rgb(24, 46, 66)', py: 3 }}>
        <Typography variant='h3' color='white' textAlign={'center'}>
          Meet our board of directors
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          mb: 2,
          p: 2,
          backgroundColor: '#3499D9',
          gap: 3,
          flexWrap: 'wrap',
        }}
      >
        <Stack sx={{ textAlign: 'center' }}>
          <Typography variant='body1' color='white' fontWeight={'bold'}>
            Advertising Director:
          </Typography>
          <Typography variant='body1' color='white'>
            Madeline Fisher
          </Typography>
          <Typography variant='body1' color='white'>
            advertising@messianictimes.com
          </Typography>
        </Stack>
        <Stack sx={{ textAlign: 'center' }}>
          <Typography variant='body1' color='white' fontWeight={'bold'}>
            Operations Coordinator:
          </Typography>
          <Typography variant='body1' color='white'>
            Joan Davidson
          </Typography>
          <Typography variant='body1' color='white'>
            joan@messianictimes.com
          </Typography>
        </Stack>
        <Stack sx={{ textAlign: 'center' }}>
          <Typography variant='body1' color='white' fontWeight={'bold'}>
            Editorial Coordinator:
          </Typography>
          <Typography variant='body1' color='white'>
            Sheila Fisher
          </Typography>
          <Typography variant='body1' color='white'>
            editor@messianictimes.com
          </Typography>
        </Stack>
        <Stack sx={{ textAlign: 'center' }}>
          <Typography variant='body1' color='white' fontWeight={'bold'}>
            Design/Layout:
          </Typography>
          <Typography variant='body1' color='white'>
            Ethan Storm
          </Typography>
          <Typography variant='body1' color='white'>
            design@messianictimes.com
          </Typography>
        </Stack>
      </Box>
      <Container sx={{ my: 3 }}>
        <Box
          sx={{
            display: { xs: 'block', md: 'flex' },
            gap: 3,
            justifyContent: 'space-between',
            alignItems: 'center',
            my: 4,
          }}
        >
          <PaulCard
            image={PaulImage}
            name='Paul Lieberman'
            description={[
              'Rabbi, Ohav Shalom Messianic Congregation,',
              'President, International Messianic Jewish Alliance,',
              `Past Executive Director, Alliance for Israel Advocacy,`,
              'Past President, Messianic Jewish Alliance of America,',
              'Past Executive Director, The Joseph Project,',
              'Past Chairman, Messianic Political Action Committee,',
              'Chairman of the Board of Directors: The Messianic Times',
            ]}
            marginAuto
          />
          <Typography
            textAlign='center'
            color='black'
            variant='h5'
            maxWidth='65%'
            margin='auto'
          >
            We believe the Biblical drama intends that the Jewish people will be
            back in the Land of Israel living in peace. This will happen through
            a joint project undertaken by both Jews and Gentiles. This physical
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
            image={JoelImage}
            name='Joel Lieberman (US)'
            description={[
              'Rabbi, Tree of Life Messianic Jewish Congregation,',
              'President, Messianic Jewish Alliance of America',
              `Int\'l Alliance of Messianic Cong\'s & Synagogues`,
            ]}
          />
          <BoardMemberCard
            image={SusanImage}
            name='Susan Perlman (US)'
            description={[
              'Co-Founder of Jews for Jesus',
              'Chief Partnership Officer, Jews for Jesus',
              'Sought after speaker and presenter at churches, theological institutions, messianic congregations and other missions',
              'Published author of evangelistic materials from tracts, skits, blogs, and apologetic articles',
            ]}
          />
          <BoardMemberCard
            image={JeffImage}
            name='Jeff Forman (Canada)'
            description={[
              'Founder, City of David Messianic Synagogue',
              'Executive Director Messianic Mandate',
              'Executive Member, Council of Messianic Jewish Congregations of Alberta',
              'The United Messianic Jewish Outreach, Inc.',
            ]}
          />
          <BoardMemberCard
            image={CalImage}
            name='Calev Goldberg (Canada)'
            description={[
              'Founder, Congregation Beth Shechinah',
              'Interim President, Messianic Jewish Alliance of Canada',
              'MJAA, IAMCS, JVMC, ReachII, MI',
            ]}
          />
          <BoardMemberCard
            image={FrankImage}
            name='Frank Lowinger (US)'
            description={[
              'Rabbi, Congregation Brith Hadoshah Messianic Synagogue',
              'Executive Committee Member (MJAA)',
              `Sought after teacher at MJBI`,
              'Past Chairman, Int’l Alliance of Messianic Cong’s &amp; Synagogues (IAMCS)',
            ]}
          />
        </Box>
        <Box sx={{ backgroundColor: 'white', pt: 4 }}>
          <Typography variant='h5' color='black'>
            General Inquiries: office@messianictimes.com
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
