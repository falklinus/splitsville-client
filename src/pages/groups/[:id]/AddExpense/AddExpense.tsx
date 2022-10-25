import React, { useState } from 'react'
import { IoCloseSharp, IoReceiptOutline } from 'react-icons/io5'
import { BiEdit } from 'react-icons/bi'
import { useNavigate, useParams } from 'react-router-dom'
import styles from './add-expense.module.css'
import { useGroup, useMe } from '../../../../hooks'
import { group } from 'console'
import { json } from 'stream/consumers'
import { useEffect } from 'react'
import { useCallback } from 'react'

export const AddExpense = () => {
  const { groupId } = useParams()
  const navigate = useNavigate()
  const { me } = useMe()
  const { group } = useGroup(groupId as string)

  const [paidBy, setPaidBy] = useState('')
  const [shares, setShares] = useState<{ share: number; user: string }[]>([])

  const setPaidByMeAndSplitEqually = useCallback(() => {
    if (!group.members.length) return
    if (!me?.id) return

    setShares(
      group.members.map((member) => ({
        share: 0.5,
        user: member.id,
      }))
    )

    setPaidBy(me.id)
  }, [group.members, me?.id])

  useEffect(() => {
    setPaidByMeAndSplitEqually()
  }, [group.members, me?.id])

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
        <div className='form-control'>
          <span style={{ fontSize: '30px' }}>kr</span>
          <input className='input' type='number' placeholder='kr' />
        </div>
        <button className='card' type='button'>
          Betalat av {me?.username}
        </button>
        {JSON.stringify(shares, null, 2)}
        <div className={styles['search-list']}>
          {group.members.map((member) => (
            <div key={member.id}>{member.username}</div>
          ))}
        </div>
      </form>
    </div>
  )
}
