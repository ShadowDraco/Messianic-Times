'use client'
import React from 'react'
import { Box, Input, Autocomplete, TextField } from '@mui/material'
import Image from 'next/image'
import { countries, states, congregations } from './pageInfo'
const cities = congregations.map(congregation => {
  return congregation.city
})

export default function SearchBar({ setCountry, setCity, setState }) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, py: 3 }}>
      <Autocomplete
        disablePortal
        id='cities-box'
        onChange={e => {
          setCity(e.target.innerHTML)
        }}
        options={cities}
        sx={{ width: 300 }}
        renderInput={params => <TextField {...params} label='City' />}
      />
      <Autocomplete
        disablePortal
        id='combo-box-demo'
        onChange={e => {
          setState(e.target.innerHTML)
        }}
        options={states}
        sx={{ width: 300 }}
        renderInput={params => <TextField {...params} label='(US) State' />}
      />
      <Autocomplete
        id='country-select-demo'
        sx={{ width: 300 }}
        options={countries}
        autoHighlight
        getOptionLabel={option => option.label}
        onChange={e => {
          setCountry(e.target.innerHTML.split('>')[1])
        }}
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
            {option.label}
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
    </Box>
  )
}
