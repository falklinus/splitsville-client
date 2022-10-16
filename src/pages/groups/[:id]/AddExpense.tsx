import React from 'react'
import {IoCloseSharp, IoReceiptOutline} from 'react-icons/io5'
import {BiEdit} from 'react-icons/bi'
import {useNavigate} from 'react-router-dom'
import styles from '../../../styles/add-expense.module.css'
import {useAuth} from '../../../hooks/useAuth'


export const AddExpense = () => {
  const navigate = useNavigate()
  const {user} = useAuth()

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <IoCloseSharp size={30} onClick={() => navigate(-1)} />
        <p className={styles.title}>Skapa utgift</p>
        <BiEdit size={30} />
      </header>
      <form action="">
        <div className={styles['form-control']}>
           <IoReceiptOutline size={30} />
          <input type="text" placeholder="Fyll i beskrivning" />
        </div>
        <div className={styles['form-control']}>
          <span>kr</span>
          <input type="number" placeholder="kr" />
        </div>
        <button type="button">Betalat av {user.username}</button>
      </form>
    </div>
  )
}