'use client'
import React, { useState, useRef } from 'react'
import { Box, Input, Autocomplete, TextField } from '@mui/material'
import Image from 'next/image'
export default function SearchBar({ countries, states, congregations }) {
  const CountryRef = useRef(null)
  const StateRef = useRef(null)
  const [search, setSearch] = useState(null)
  const [country, setCountry] = useState(null)
  const [city, setCity] = useState(null)
  const [state, setState] = useState(null)

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
      <Autocomplete
        ref={CountryRef}
        id='country-select-demo'
        sx={{ width: 300 }}
        options={countries}
        autoHighlight
        getOptionLabel={option => option.label}
        renderOption={(props, option) => (
          <Box
            component='li'
            sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            <Image
              loading='lazy'
              width='20'
              height='10'
              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
              alt=''
            />
            {option.label} ({option.code}) +{option.phone}
          </Box>
        )}
        renderInput={params => (
          <TextField
            {...params}
            label='Country'
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password', // disable autocomplete and autofill
            }}
          />
        )}
      />
      <Autocomplete
        ref={StateRef}
        disablePortal
        id='combo-box-demo'
        options={states}
        sx={{ width: 300 }}
        renderInput={params => (
          <TextField {...params} label='State (US only)' />
        )}
      />
    </Box>
  )
}
