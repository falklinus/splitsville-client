import React from 'react'
import { BiSave } from 'react-icons/bi'
import { IoCloseSharp } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { useMe } from '../../hooks'
import styles from '../../styles/create-group.module.css'

export const CreateGroup = () => {
  const { me } = useMe()
  const friends = me?.friends
  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <IoCloseSharp size={30} onClick={() => navigate(-1)} />
        <p className={styles.title}>Skapa Grupp</p>
        <BiSave size={30} />
      </header>

      <form action=''>
        <div className={styles['form-control']}>
          <input type='text' placeholder='Fyll i beskrivning' />
        </div>
        <div className={styles['form-control']}>
          <label>Vilka ska ingå i gruppen?</label>
          <select>
            {friends?.map((friend) => (
              <option key={friend.id}>{friend.username}</option>
            ))}
          </select>
        </div>
      </form>
    </div>
  )
}
