'use client'
import React from 'react'
import { useWindowContext } from '../../Providers'
import Adverts from '../Adverts'
export default function AdvertLoader() {
  const { timesWidth, timesHeight } = useWindowContext()
  return <Adverts timesWidth={timesWidth} timesHeight={timesHeight} />
}
