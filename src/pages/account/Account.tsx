import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import { Navbar } from '../../components'
import { useMe } from '../../hooks'
import { handleLogout } from '../../util'
import styles from './account.module.css'

export const Account = () => {
  const { me } = useMe()
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <strong>{me?.username}</strong>
        <div
          className='flex-row pointer'
          onClick={() => {
            handleLogout()
            window.location.reload()
          }}
        >
          Logga ut &nbsp;
          <BiLogOut size={24} />
        </div>
      </header>
      <div>
        <p>User: {me?.username}</p>
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
