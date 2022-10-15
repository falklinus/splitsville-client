import React from 'react'
import styles from '../../../styles/group.module.css'
import { useGroup } from '../../../hooks'
import { IoIosArrowBack } from 'react-icons/io'
import { TbDots } from 'react-icons/tb'
import { useNavigate, useParams } from 'react-router-dom'
import { ExpenseItem } from '../../../components'
import { convertUserNameToInitials } from '../../../util'

export const Group = () => {
  const { groupId } = useParams()
  const navigate = useNavigate()
  const { group, totalAmount, loading } = useGroup(groupId as string)

  const expenses = group.expenses

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
          <span>{group.title}</span>
          <span className={styles.total}>{totalAmount} kr</span>
        </h3>
        <div className={styles.members}>
          {group.members.map((member) => (
            <div key={member.id} className={styles['name-circle']}>
              {convertUserNameToInitials(member.username)}
            </div>
          ))}
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
