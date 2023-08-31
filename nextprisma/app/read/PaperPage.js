import React from 'react'
import ZoomImage from './ZoomImage'
const Page = React.forwardRef(({ image, number }, ref) => {
  return (
    <div className={`page-${number}`} ref={ref}>
      <ZoomImage image={image} />
    </div>
  )
})
Page.displayName = 'PaperPage'
export default Page
