import React from 'react'

import MainHeader from '../../components/PageHeader/MainHeader'
import PageFooter from '../../components/PageFooter/PageFooter'
import Box from '@mui/material/Box'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
export default async function layout({ children }) {
 
  return (
    <div>
      <MainHeader />
      <Box
        sx={{
          width: '95%',
          maxWidth: '1300',
          margin: 'auto',
          backgroundColor: 'rgb(24, 46, 66)',
        }}
      >
        {children}
      </Box>
      <PageFooter/>
    </div>
  )
}
