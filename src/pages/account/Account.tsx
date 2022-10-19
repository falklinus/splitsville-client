import React from 'react'
import { Navbar } from '../../components'
import { useMe } from '../../hooks'
import { useAuth } from '../../hooks/useAuth'

export const Account = () => {
  const { logoutUser } = useAuth()
  const { me } = useMe()
  return (
    <div>
      Account
      <button onClick={logoutUser}>Logga ut</button>
      <div>
        <p>User: {me.username}</p>
        Friends:
        <ul>
          {me?.friends?.map((friend) => (
            <p key={friend.id}>{friend.username}</p>
          ))}
        </ul>
      </div>
      <Navbar />
    </div>
  )
}
