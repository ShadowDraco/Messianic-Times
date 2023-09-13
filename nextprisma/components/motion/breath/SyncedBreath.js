import React from 'react'
import { motion } from 'framer-motion'
export default function BreathWrapper({ children }) {
  return (
    <motion.div
      className='BreathWrapper flex justify-center'
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 0.8, scale: 0.9 }}
      transition={{ duration: 2, repeatType: 'reverse', repeat: Infinity }}
        style={{ cursor: 'help'}}
    >
      {children}
    </motion.div>
  )
}
