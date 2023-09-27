'use client';
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import BuyItemButton from './BuyItemButton';
import { Star } from '../../components/icons/Icons';

import { signIn } from 'next-auth/react';

function Copyright(props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link
        color='inherit'
        href='https://mui.com/'
      >
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: [
      'Cool stuff',
      'Random feature',
      'Team feature',
      'Developer stuff',
      'Another one',
    ],
  },
  {
    title: 'Resources',
    description: [
      'Resource',
      'Resource name',
      'Another resource',
      'Final resource',
    ],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Pricing({ prices }) {
  const tiers = [
    {
      title: 'Free',
      price: '$0.00',
      description: ['1 Free Paper', 'Try and subscribe later!'],
    },
    {
      title: 'Auto Renew',
      price: formatter.format(prices[0].unit_amount / 100),
      description: [
        'Access to all papers',
        'Access to all articles',
        '8% discount!',
        'Auto renew once a year',
        'Always have access to the Times!',
      ],
    },
    {
      title: '1 Year',
      subheader: 'Most popular',
      price: formatter.format(prices[1].unit_amount / 100),
      description: ['Access to all papers', 'Access to all articles'],
    },
    {
      title: '2 Year',
      price: formatter.format(prices[2].unit_amount / 100),
      description: ['Access to all papers', 'Access to all articles'],
    },
    {
      title: '3 Year',
      subheader: 'Most Value',
      price: formatter.format(prices[3].unit_amount / 100),
      description: ['Access to all papers', 'Access to all articles'],
    },
  ];

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
      />
      <CssBaseline />
      <AppBar
        position='static'
        color='default'
        elevation={0}
        sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography
            variant='h6'
            color='inherit'
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Messianic Times
          </Typography>
          <nav>
            <Link
              variant='button'
              color='text.primary'
              href='/'
              sx={{ my: 1, mx: 1.5 }}
            >
              HOME
            </Link>
            <Link
              variant='button'
              color='text.primary'
              href='#'
              sx={{ my: 1, mx: 1.5 }}
            >
              Enterprise
            </Link>
            <Link
              variant='button'
              color='text.primary'
              href='#'
              sx={{ my: 1, mx: 1.5 }}
            >
              Support
            </Link>
          </nav>
          <Button
            onClick={() => {
              signIn();
            }}
            variant='outlined'
            sx={{ my: 1, mx: 1.5 }}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container
        disableGutters
        maxWidth='sm'
        component='main'
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          component='h1'
          variant='h2'
          align='center'
          color='text.primary'
          gutterBottom
        >
          Pricing
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container
        maxWidth='md'
        component='main'
      >
        <Grid
          container
          spacing={5}
          alignItems='flex-end'
        >
          {tiers.map((tier, tIndex) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <Star /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: theme =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography
                      component='h2'
                      variant='h3'
                      color='text.primary'
                    >
                      {tier.price}
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map(line => (
                      <Typography
                        component='li'
                        variant='subtitle1'
                        align='center'
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  {tIndex > 0 ? (
                    <BuyItemButton
                      price={prices[tIndex - 1]}
                      index={tIndex}
                    />
                  ) : (
                    <Button
                      fullWidth
                      onClick={() => {
                        signIn();
                      }}
                    >
                      Sign up!
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      <Container
        maxWidth='md'
        component='footer'
        sx={{
          borderTop: theme => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid
          container
          spacing={4}
          justifyContent='space-evenly'
        >
          {footers.map(footer => (
            <Grid
              item
              xs={6}
              sm={3}
              key={footer.title}
            >
              <Typography
                variant='h6'
                color='text.primary'
                gutterBottom
              >
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map(item => (
                  <li key={item}>
                    <Link
                      href='#'
                      variant='subtitle1'
                      color='text.secondary'
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      {/* End footer */}
    </ThemeProvider>
  );
}
