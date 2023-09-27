import React from 'react'
import MainHeader from '../../components/PageHeader/MainHeader'

export default function layout({ children }) {
  return (
    <div>
      <MainHeader />
      {children}
    </div>
  )
}
