import React from 'react'
import { Navbar } from '../../components'
import { useMe } from '../../hooks'

export const Account = () => {
  const { me } = useMe()
  return (
    <div>
      Account
      <button onClick={() => {
        localStorage.removeItem('split_token')
        window.location.reload()
      }}>Logga ut</button>
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
