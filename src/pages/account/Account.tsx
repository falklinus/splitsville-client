import React from 'react'
import { Navbar } from '../../components'
import { useAuth } from '../../hooks/useAuth'

export const Account = () => {
  const { logoutUser } = useAuth()
  return (
    <div>
      Account
      <button onClick={logoutUser}>Logga ut</button>
      <Navbar />
    </div>
  )
}
