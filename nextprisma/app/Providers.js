'use client'
import React, { useState, useEffect, useContext, createContext } from 'react'
import { SessionProvider } from 'next-auth/react'

export const WindowContext = createContext(null)

export default function Providers({ children, session }) {
  const [timesWidth, setTimesWidth] = useState(300)
  const [timesHeight, setTimesHeight] = useState(timesWidth / 8)

  // Get window size once on mount
  useEffect(() => {
    setTimesWidth(window.innerWidth - window.innerWidth * 0.02)
    setTimesHeight((window.innerWidth - window.innerWidth * 0.02) / 8)
  }, [])

  useEffect(() => {
    const handleWindowResize = () => {
      setTimesWidth(window.innerWidth - window.innerWidth * 0.02)
      setTimesHeight((window.innerWidth - window.innerWidth * 0.02) / 8)
    }

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
