'use client'
import React, { useState } from 'react'
import { Box, Input, Autocomplete, TextField } from '@mui/material'
export default function SearchBar({
  countries,
  states,
  cities,
  congregations,
}) {
  const [search, setSearch] = useState(null)
  const [country, setCountry] = useState(null)
  const [city, setCity] = useState(null)
  const [state, setState] = useState(null)

  return (
    <Box>
      <Autocomplete
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
            <img
              loading='lazy'
              width='20'
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
            label='Choose a country'
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password', // disable autocomplete and autofill
            }}
          />
        )}
      />
    </Box>
  )
}
