import React, {FC, useMemo} from 'react'
import {TbReceipt, TbReceiptRefund} from 'react-icons/tb'
import {Link} from 'react-router-dom'
import styles from '../styles/group-item.module.css'
import {TGroup} from '../types/types'
import moment from 'moment'
import {useAuth} from '../hooks/useAuth'

export const GroupItem: FC<{ group: TGroup }> = ({group}) => {
  const {user} = useAuth()

  const {expenses} = group

  const whatIHavePaid = useMemo(
    () =>
      expenses.reduce((sum, {paidBy, amount}) => {
        if (paidBy.id === user.id) {
          return (sum += amount)
        }
        return sum
      }, 0),
    [expenses]
  )

  const whatIHaveBorrowed = useMemo(
    () =>
      expenses.reduce((sum, {amount, shares}) => {
        const myShare =
          shares.find((share) => share.user.id === user.id)?.share ?? 0
        sum += amount * myShare
        return sum
      }, 0),
    [group.expenses.length]
  )

  return (
    <Link to={`/groups/${group.id}`}>
      <div className={styles.container}>
        <h3>{group.title}</h3>
        <div>
          {whatIHavePaid === whatIHaveBorrowed && <div>Kvitt</div>}
          {whatIHavePaid > whatIHaveBorrowed && (
            <div>De är skyldiga {whatIHavePaid - whatIHaveBorrowed}</div>
          )}
          {whatIHavePaid < whatIHaveBorrowed && (
            <div>Jag är skyldig {whatIHaveBorrowed - whatIHavePaid}</div>
          )}
        </div>
      </div>
    </Link>
  )
}
