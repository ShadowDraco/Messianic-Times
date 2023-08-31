import React from 'react'

import AdminDashLinks from '../icons/AdminDashLinks'
export default function StudioNavbar(props) {
  return (
    <>
      <AdminDashLinks />
      <>{props.renderDefault(props)}</>
    </>
  )
}
