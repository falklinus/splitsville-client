import React from 'react'
import { IoCloseSharp, IoReceiptOutline } from 'react-icons/io5'
import { BiEdit } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import styles from '../../../styles/add-expense.module.css'
import { useMe } from '../../../hooks'

export const AddExpense = () => {
  const navigate = useNavigate()
  const { me } = useMe()

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <IoCloseSharp size={30} onClick={() => navigate(-1)} />
        <p className={styles.title}>Skapa utgift</p>
        <BiEdit size={30} />
      </header>
      <form className={styles.form} action=''>
        <div className={styles['form-control']}>
          <IoReceiptOutline size={30} />
          <input
            className={styles.input}
            type='text'
            placeholder='Fyll i beskrivning'
          />
        </div>
        <div className={styles['form-control']}>
          <span>kr</span>
          <input className={styles.input} type='number' placeholder='kr' />
        </div>
        <button type='button'>Betalat av {me?.username}</button>
      </form>
    </div>
  )
}
