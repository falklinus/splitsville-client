import React from 'react'
import { BiPlusCircle } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { Groups, Navbar } from '../../components'
import styles from '../../styles/home.module.css'

export const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <Link to='groups/create'>
          <div className={styles['create-group']}>
            Skapa en grupp <BiPlusCircle size={30} />
          </div>
        </Link>
        <Groups />
      </div>
      <Navbar />
    </>
  )
}
