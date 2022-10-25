import { useLazyQuery } from '@apollo/client'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { fetchLoggedInUser } from '../../graphql/queries/fetchLoggedInUser'
import { SEARCH_USERS_QUERY } from '../../graphql/queries/searchUser'
import { useClickOutside, useMe } from '../../hooks'
import styles from './select-members-modal.module.css'
import { TUser } from '../../types/types'

export const SelectMembersModal = ({
  addMember,
  memberAlreadySelected,
  visible,
  onClose,
}: {
  addMember: (member: TUser) => void
  memberAlreadySelected: (memberId: string) => boolean
  visible: boolean
  onClose: () => void
}) => {
  const { me } = fetchLoggedInUser()
  const [searchUsers, { data, loading, error }] = useLazyQuery<{
    searchUsers: TUser[]
  }>(SEARCH_USERS_QUERY)

  const [searchTerm, setSearchTerm] = useState('')
  useEffect(() => {
    if (!searchTerm) {
      return
    }
    searchUsers({ variables: { searchTerm } })
  }, [searchTerm])

  const searchResult = useMemo(() => {
    if (!searchTerm) return []
    return data?.searchUsers?.filter(
      (user) => user.id !== me?.id && !memberAlreadySelected(user.id)
    )
  }, [data, searchTerm, memberAlreadySelected])

  const clickRef = useRef(null)

  useClickOutside(
    clickRef,
    useCallback(() => onClose(), [onClose])
  )

  if (!visible) {
    return null
  }

  return (
    <div ref={clickRef} className={styles.container}>
      <input
        onChange={({ currentTarget: { value } }) => setSearchTerm(value)}
        autoFocus
        className={styles.input}
        type='text'
      />
      <div className={styles['search-list']}>
        {/* {me?.friends.map((friend) => (
          <div
            key={friend.id}
            onClick={() => {
              addMember(friend as TUser)
              onClose()
            }}
          >
            {friend.username}
          </div>
        ))} */}
        {searchResult?.map((user) => (
          <div
            key={user.id}
            onClick={() => {
              addMember(user)
              onClose()
            }}
          >
            {user.username} ({user.email})
          </div>
        ))}
      </div>
    </div>
  )
}
