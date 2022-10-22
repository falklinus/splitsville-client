import React, { useState } from 'react'
import { BiCheck, BiTrash, BiTrashAlt } from 'react-icons/bi'
import { IoAdd, IoCloseSharp } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { useMe } from '../../hooks'
import styles from '../../styles/create-group.module.css'
import { SelectMembersModal } from '../../components'
import { TUser } from '../../types/types'

export const CreateGroup = () => {
  const { me } = useMe()
  const navigate = useNavigate()

  const [selectMembersModalVisible, setSelectMembersModalVisible] =
    useState(false)
  const [selectedMembers, setSelectedMembers] = useState<TUser[]>(
    me ? [me] : []
  )

  const addMember = (member: TUser) => {
    setSelectedMembers((prev) => [...prev, member])
  }

  return (
    <>
      <div
        className={`${styles.container} ${
          selectMembersModalVisible && styles.dim
        }`}
      >
        <header className={styles.header}>
          <IoCloseSharp size={30} onClick={() => navigate(-1)} />
          <p className={styles.title}>Skapa Grupp</p>
          <BiCheck size={30} />
        </header>

        <form className={styles.form} action=''>
          <div className={styles['form-control']}>
            <input
              className={styles.input}
              type='text'
              placeholder='Vad ska gruppen heta?'
            />
          </div>
          <div>
            <p className={styles['section-title']}>
              Välj vilka som ska vara med
            </p>
            <ul className={styles['member-list']}>
              {selectedMembers.map((member) => (
                <li key={member.id} className={styles['member-list-item']}>
                  {member.username}
                  {member.id !== me?.id && <BiTrashAlt size={20} />}
                </li>
              ))}
              <li className={styles['member-list-item']}>
                <button
                  type='button'
                  className={styles.button}
                  onClick={() => setSelectMembersModalVisible(true)}
                >
                  <IoAdd size={22} />
                </button>
              </li>
            </ul>
          </div>
        </form>
      </div>
      <SelectMembersModal
        addMember={addMember}
        visible={selectMembersModalVisible}
        onClose={() => setSelectMembersModalVisible(false)}
      />
    </>
  )
}
