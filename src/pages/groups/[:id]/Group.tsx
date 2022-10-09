import React from 'react'
import styles from '../../../styles/group.module.css'
import { useExpenses } from '../../../hooks'
import { IoIosArrowBack } from 'react-icons/io'
import { TbDots } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import { ExpenseItem } from '../../../components'

export const Group = () => {
  const navigate = useNavigate()
  const { expenses, totalAmount, loading } = useExpenses()
  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.navigation}>
          <IoIosArrowBack size={30} onClick={() => navigate(-1)} />
          <TbDots size={30} />
        </div>
        <h3 className={styles.title}>
          <span>Gruppen</span>
          <span className={styles.total}>{totalAmount} kr</span>
        </h3>
        <div className={styles.members}>
          <div className={styles['name-circle']}>BE</div>
          <div className={styles['name-circle']}>J</div>
        </div>
      </header>
      <section className={styles['list-container']}>
        <div className={styles.list}>
          {expenses.map((expense) => (
            <ExpenseItem key={expense.id} expense={expense} />
          ))}
        </div>
      </section>
    </div>
  )
}
