import React from 'react'
import styles from '../styles/navbar.module.css'
import { BiBell, BiHomeAlt, BiUser } from 'react-icons/bi'
import { Link, useLocation } from 'react-router-dom'

export const Navbar = () => {
  const { pathname } = useLocation()

  const activeTab = pathname.includes('activity')
    ? 'activity'
    : pathname.includes('account')
    ? 'account'
    : 'home'

  return (
    <footer className={styles.container}>
      <Link to={'/activity'}>
        <button className={activeTab === 'activity' ? styles.active : ''}>
          <BiBell size={30} />
          <p>Aktivitet</p>
        </button>
      </Link>
      <Link to={'/'}>
        <button className={activeTab === 'home' ? styles.active : ''}>
          <BiHomeAlt size={30} />
          <p>Grupper</p>
        </button>
      </Link>
      <Link to={'/account'}>
        <button className={activeTab === 'account' ? styles.active : ''}>
          <BiUser size={30} />
          <p>Min sida</p>
        </button>
      </Link>
    </footer>
  )
}
