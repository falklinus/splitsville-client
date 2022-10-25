import React, { useCallback, useRef, useState } from 'react'
import { BiCheck, BiTrash, BiTrashAlt } from 'react-icons/bi'
import { IoAdd, IoCloseSharp } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { useMe } from '../../../hooks'
import styles from './create-group.module.css'
import { SelectMembersModal } from '../../../components'
import { TUser } from '../../../types/types'
import { useCreateGroup } from '../../../hooks/useCreateGroup'

export const CreateGroup = () => {
  const { me } = useMe()
  const navigate = useNavigate()

  const [selectMembersModalVisible, setSelectMembersModalVisible] =
    useState(false)
  const [selectedMembers, setSelectedMembers] = useState<TUser[]>([])

  const addMember = (member: TUser) => {
    setSelectedMembers((prev) => [...prev, member])
  }

  const removeMember = (member: TUser) => {
    setSelectedMembers((prev) => {
      const index = prev.findIndex((m) => m.id === member.id)
      return [...prev.slice(0, index), ...prev.slice(index + 1)]
    })
  }

  const checkIfMemberIsSelected = useCallback(
    (memberId: string) =>
      selectedMembers.findIndex((member) => member.id === memberId) != -1,
    [selectedMembers]
  )

  const { createGroup } = useCreateGroup()

  const titleRef = useRef<HTMLInputElement>(null)

  return (
    <>
      <div
        className={`slide-up-container ${
          selectMembersModalVisible && styles.dim
        }`}
      >
        <header className='header'>
          <IoCloseSharp size={30} onClick={() => navigate(-1)} />
          <p className='title'>Skapa Grupp</p>
          <BiCheck
            size={30}
            onClick={() =>
              createGroup({
                title: titleRef?.current?.value,
                userIds: selectedMembers.map((member) => member.id),
              }).then(() => navigate('/'))
            }
          />
        </header>

        <form className='form' action=''>
          <div className='form-control'>
            <input
              ref={titleRef}
              className='input'
              type='text'
              placeholder='Vad ska gruppen heta?'
            />
          </div>
          <div className={styles['add-members']}>
            <p className={styles['section-title']}>
              Välj vilka som ska vara med
            </p>
            <ul className={styles['member-list']}>
              {me &&
                [me, ...selectedMembers].map((member) => (
                  <li key={member.id} className={styles['member-list-item']}>
                    {member.username}
                    {member.id !== me?.id && (
                      <BiTrashAlt
                        onClick={() => removeMember(member)}
                        size={20}
                      />
                    )}
                  </li>
                ))}
              <li className={styles['member-list-item']}>
                <button
                  type='button'
                  className={`card ${styles.button}`}
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
        memberAlreadySelected={checkIfMemberIsSelected}
        visible={selectMembersModalVisible}
        onClose={() => setSelectMembersModalVisible(false)}
      />
    </>
  )
}
