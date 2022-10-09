import React, { FC } from 'react'
import { TbReceipt, TbReceiptRefund } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import styles from '../styles/expense-item.module.css'
import { TExpense } from '../types/types'
import moment from 'moment'

export const ExpenseItem: FC<{ expense: TExpense }> = ({ expense }) => {
  const isUsersExpense = true

  return (
    <Link to={`/expenses/${expense.id}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          {isUsersExpense ? (
            <TbReceiptRefund size={50} />
          ) : (
            <TbReceipt size={50} />
          )}
          <div className={styles.title}>
            <p>{expense.title}</p>
            <span className={styles['created-info']}>
              {moment(expense.createdAt)
                .format('D MMM., YYYY, hh:m')
                .toLocaleLowerCase()}
            </span>
          </div>
        </div>
        <div className={styles['paid-by']}>
          <div className={styles.amount}>{expense.amount} kr</div>
          {expense.paidBy.username} betalade
        </div>
      </div>
    </Link>
  )
}
