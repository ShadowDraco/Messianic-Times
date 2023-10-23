'use client'
import React, { useState } from 'react'
import CongregationCard from './CongregationCard'
import Box from '@mui/material/Box'
import SearchBar from './SearchBar'

export default function SearchArea({ congregations, imageDirectory}) {
  const countryFilter = church => {
    if (country !== '') return church.country === country
    return true
  }
  const stateFilter = church => {
    if (state !== '') return church.state === state
    return true
  }
  const cityFilter = church => {
    if (city !== '') return church.city === city
    return true
  }

  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')

  return (
    <>
      <SearchBar
        setCity={setCity}
        setCountry={setCountry}
        setState={setState}
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          gap: 2,
          flexWrap: 'wrap',
        }}
      >
        {congregations.map((church, i) => {
          if (
            countryFilter(church) &&
            cityFilter(church) &&
            stateFilter(church)
          )
            return <CongregationCard church={church} key={i} imageDirectory={imageDirectory}/>
        })}
      </Box>
    </>
  )
}
