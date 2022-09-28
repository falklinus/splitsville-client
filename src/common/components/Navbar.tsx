import React, { useState } from 'react'
import styles from '../styles/navbar.module.css'
import { BiBell, BiHomeAlt, BiUser } from 'react-icons/bi'

export const Navbar = () => {
  const [activeButton, setActiveButton] = useState('home')
  return (
    <footer className={styles.container}>
      <button
        onClick={() => setActiveButton('activity')}
        className={activeButton === 'activity' ? styles.active : ''}
      >
        <BiBell size={30} />
        Activity
      </button>
      <button
        onClick={() => setActiveButton('home')}
        className={activeButton === 'home' ? styles.active : ''}
      >
        <BiHomeAlt size={30} />
        Home
      </button>
      <button
        onClick={() => setActiveButton('account')}
        className={activeButton === 'account' ? styles.active : ''}
      >
        <BiUser size={30} />
        Account
      </button>
    </footer>
  )
}
