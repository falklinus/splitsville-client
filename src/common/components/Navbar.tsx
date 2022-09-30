import React, { useState } from 'react'
import styles from '../styles/navbar.module.css'
import { BiBell, BiHomeAlt, BiUser } from 'react-icons/bi'
import { Link, useLocation } from 'react-router-dom'

export const Navbar = () => {
  const { pathname } = useLocation()

  return (
    <footer className={styles.container}>
      <Link to={'/activity'}>
        <button className={pathname.includes('activity') ? styles.active : ''}>
          <BiBell size={30} />
          Activity
        </button>
      </Link>
      <Link to={'/dashboard'}>
        <button className={pathname.includes('dashboard') ? styles.active : ''}>
          <BiHomeAlt size={30} />
          Home
        </button>
      </Link>
      <Link to={'/account'}>
        <button className={pathname.includes('account') ? styles.active : ''}>
          <BiUser size={30} />
          Account
        </button>
      </Link>
    </footer>
  )
}
