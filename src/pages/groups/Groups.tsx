import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../../components'

export const Groups = () => {
  return (
    <div>
      <Link to='/groups/123'>Gruppen</Link>
      <Navbar />
    </div>
  )
}
