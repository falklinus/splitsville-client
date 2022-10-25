import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styles from './expense.module.css'
import { BiEdit } from 'react-icons/bi'
import { IoCloseSharp } from 'react-icons/io5'
import moment from 'moment'
import { useExpense } from '../../../../hooks'

export const Expense = () => {
  const navigate = useNavigate()
  const { expenseId } = useParams()
  const { expense, loading } = useExpense(expenseId)

  if (loading) {
    return <div>Loading...</div>
  }

  if (!expense) {
    return <div>Something went wrong</div>
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <IoCloseSharp size={30} onClick={() => navigate(-1)} />
        <p className={styles.title}>{expense.title}</p>
        <BiEdit size={30} />
      </header>

      <section className={styles.main}>
        {expense.paidBy.username} betalade <strong>{expense.amount} kr</strong>{' '}
        för {expense.title}
      </section>

      <section>
        <p className={styles['participants-title']}>
          <span>Deltagare</span>
        </p>
        {expense.shares.map((share) => (
          <div key={share.user.id} className={styles.participant}>
            <span>{share.user.username}</span>
            <span className={styles['participant-amount']}>
              {share.share * expense.amount} kr
            </span>
          </div>
        ))}
      </section>

      <section className={styles['created-info']}>
        <span>Utgift skapad manuellt,</span>
        <span>
          av {expense.createdBy.username},{' '}
          {moment(expense.createdAt)
            .format('D MMM., YYYY, hh:m')
            .toLocaleLowerCase()}
        </span>
      </section>
    </div>
  )
}
