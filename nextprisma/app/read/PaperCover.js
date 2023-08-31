import React from 'react'
import { Box } from '@mui/material'
const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className='page page-cover' ref={ref} data-density='hard'>
      <Box
        sx={{
          backgroundColor: 'white',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        className='page-content'
      >
        <h2>{props.children}</h2>
      </Box>
    </div>
  )
})

PageCover.displayName = 'PageCover'
export default PageCover
