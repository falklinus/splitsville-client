import React, { FC, useMemo } from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/group-item.module.css'
import { TGroup } from '../types/types'
import { useMe } from '../hooks'

export const GroupItem: FC<{ group: TGroup }> = ({ group }) => {
  const { me } = useMe()

  const { expenses } = group

  const whatIHavePaid = useMemo(
    () =>
      expenses.reduce((sum, { paidBy, amount }) => {
        if (paidBy.id === me?.id) {
          return (sum += amount)
        }
        return sum
      }, 0),
    [expenses]
  )

  const whatIHaveBorrowed = useMemo(
    () =>
      expenses.reduce((sum, { amount, shares }) => {
        const myShare =
          shares.find((share) => share.user.id === me?.id)?.share ?? 0
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
