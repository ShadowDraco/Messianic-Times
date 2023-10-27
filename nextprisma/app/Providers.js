'use client'
import React, { useState, useEffect, useContext, createContext } from 'react'
import { SessionProvider } from 'next-auth/react'
import { LazyMotion, domAnimation } from 'framer-motion'
export const WindowContext = createContext(null)
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles'

let theme = createTheme()
theme = responsiveFontSizes(theme)

export default function Providers({ children, session }) {
  const [timesWidth, setTimesWidth] = useState(320)
  const [timesHeight, setTimesHeight] = useState(timesWidth / 9)
  let theme = createTheme()
  theme = responsiveFontSizes(theme)
  // Get window size once on mount
  useEffect(() => {
    if (window.innerWidth > 500) {
      setTimesWidth(window.innerWidth - window.innerWidth * 0.05)
      setTimesHeight((window.innerWidth - window.innerWidth * 0.05) / 9)
    } else {
      setTimesWidth(window.innerWidth - window.innerWidth * 0.2)
      setTimesHeight((window.innerWidth - window.innerWidth * 0.2) / 9)
    }
  }, [])

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth > 500) {
        setTimesWidth(window.innerWidth - window.innerWidth * 0.02)
        setTimesHeight((window.innerWidth - window.innerWidth * 0.02) / 9)
      } else {
        setTimesWidth(window.innerWidth - window.innerWidth * 0.1)
        setTimesHeight((window.innerWidth - window.innerWidth * 0.1) / 9)
      }
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  })
  return (
    <SessionProvider session={session}>
      <WindowContext.Provider value={{ timesWidth, timesHeight }}>
        <ThemeProvider theme={theme}>
          <LazyMotion features={domAnimation}>{children}</LazyMotion>
        </ThemeProvider>
      </WindowContext.Provider>
    </SessionProvider>
  )
}

export function useWindowContext() {
  return useContext(WindowContext)
}
