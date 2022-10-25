import React from 'react'
import { IoCloseSharp, IoReceiptOutline } from 'react-icons/io5'
import { BiEdit } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import styles from './add-expense.module.css'
import { useMe } from '../../../../hooks'

export const AddExpense = () => {
  const navigate = useNavigate()
  const { me } = useMe()

  return (
    <div className='slide-up-container'>
      <header className='header'>
        <IoCloseSharp size={30} onClick={() => navigate(-1)} />
        <p className='title'>Skapa utgift</p>
        <BiEdit size={30} />
      </header>
      <form className='form' action=''>
        <div className='form-control'>
          <IoReceiptOutline size={30} />
          <input
            className='input'
            type='text'
            placeholder='Fyll i beskrivning'
          />
        </div>
        <div className={styles['form-control']}>
          <span style={{ fontSize: '30px' }}>kr</span>
          <input className='input' type='number' placeholder='kr' />
        </div>
        <button type='button'>Betalat av {me?.username}</button>
      </form>
    </div>
  )
}
