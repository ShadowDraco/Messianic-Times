'use client'
import React, { useCallback, useRef } from 'react'
import HTMLFlipBook from 'react-pageflip'
import Page from './PaperPage'
import PageCover from './PaperCover'
import { Box, Container, Typography, Button } from '@mui/material'
import { Newspaper1 } from '../../../public/assets/papers/NewspaperScreenshots/Newspaper'
export default function PaperViewer() {
  const book = useRef(null)

  const onFlip = useCallback(e => {
    // do something
  }, [])

  return (
    <Container>
      <Box sx={{ my: 3 }}>
        <Typography variant='h4'>Read a paper: </Typography>
      </Box>
      <Box>
        <Button onClick={() => book.current.pageFlip().flipPrev()}>
          Previous page
        </Button>
        <Button onClick={() => book.current.pageFlip().flipNext()}>
          Next page
        </Button>
      </Box>

      <HTMLFlipBook
        width={550}
        height={733}
        size='stretch'
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1533}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        className='demo-book'
        onFlip={e => {
          onFlip(e)
        }}
        ref={book}
      >
        <PageCover>FRONT PAGE</PageCover>
        {Newspaper1.map((image, i) => {
          return <Page key={i} number={`${i}`} image={image} />
        })}
        <PageCover>LAST PAGE</PageCover>
      </HTMLFlipBook>
    </Container>
  )
}

/*

To set configuration use these props:

width: number - required
height: number - required
size: ("fixed", "stretch") - default: "fixed" Whether the book will be stretched under the parent element or not
minWidth, maxWidth, minHeight, maxHeight: number You must set threshold values ​​with size: "stretch"
drawShadow: bool - default: true Draw shadows or not when page flipping
flippingTime: number (milliseconds) - default: 1000 Flipping animation time
usePortrait: bool - default: true Enable switching to portrait mode
startZIndex: number - default: 0 Initial value to z-index
autoSize: bool - default: true If this value is true, the parent element will be equal to the size of the book
maxShadowOpacity: number [0..1] - default: 1 Shadow intensity (1: max intensity, 0: hidden shadows)
showCover: boolean - default: false If this value is true, the first and the last pages will be marked as hard and will be shown in single page mode
mobileScrollSupport: boolean - default: true disable content scrolling when touching a book on mobile devices
swipeDistance: number - default: 30 (px) minimum distance to detect swipe
clickEventForward: boolean - default: true forwarding click events to the page children html elements (only for a and button tags)
useMouseEvents: boolean - default: true using mouse and touch events to page flipping
renderOnlyPageLengthChange: boolean - default: false (NEW on 2.0.0) if this flag is active, the book will be updated and re-rendered ONLY if the number of pages has changed

*/
