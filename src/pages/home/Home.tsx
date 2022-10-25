import React from 'react'
import { BiPlus } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { Groups, Navbar } from '../../components'
import styles from './home.module.css'

export const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <strong>Grupper</strong>
          <Link to='groups/create'>
            <div className='flex-row'>
              Ny grupp &nbsp; <BiPlus size={24} />
            </div>
          </Link>
        </header>

        <Groups />
      </div>
      <Navbar />
    </>
  )
}
