import React from 'react'

import { m } from 'framer-motion'
export default function BreathWrapper({ children }) {
  return (
    <m.div
      className='BreathWrapper flex justify-center'
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 0.8, scale: 0.9 }}
      transition={{ duration: 2, repeatType: 'reverse', repeat: Infinity }}
      whileHover={{ scale: 1 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </m.div>
  )
}
