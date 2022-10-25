import React from 'react'
import { BiBellOff } from 'react-icons/bi'
import { Navbar } from '../../components'
import styles from './activity.module.css'

export const Activity = () => {
  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <strong>Aktivitet</strong>
          <BiBellOff size={24} />
        </header>
      </div>
      <Navbar />
    </>
  )
}
