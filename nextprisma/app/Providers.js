'use client'
import React, { useState, useEffect, useContext, createContext } from 'react'
import { SessionProvider } from 'next-auth/react'

export const WindowContext = createContext(null)

export default function Providers({ children, session }) {
  const [timesWidth, setTimesWidth] = useState(320)
  const [timesHeight, setTimesHeight] = useState(timesWidth / 9)

  // Get window size once on mount
  useEffect(() => {
    if (window.innerWidth > 500) {
      setTimesWidth(window.innerWidth - window.innerWidth * 0.02)
      setTimesHeight((window.innerWidth - window.innerWidth * 0.02) / 9)
    } else {
      setTimesWidth(window.innerWidth - window.innerWidth * 0.1)
      setTimesHeight((window.innerWidth - window.innerWidth * 0.1) / 9)
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
    console.log(timesWidth, timesHeight)

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  })
  return (
    <SessionProvider session={session}>
      <WindowContext.Provider value={{ timesWidth, timesHeight }}>
        {children}
      </WindowContext.Provider>
    </SessionProvider>
  )
}

export function useWindowContext() {
  return useContext(WindowContext)
}
