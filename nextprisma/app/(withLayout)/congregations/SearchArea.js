'use client'
import React, { useState } from 'react'
import { Box } from '@mui/material'
import SearchBar from './SearchBar'
import CongregationCard from './CongregationCard'
import { congregations } from './pageInfo'
export default function SearchArea() {
  const [search, setSearch] = useState(null)
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')

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
            return <CongregationCard church={church} key={i} />
        })}
      </Box>
    </>
  )
}
