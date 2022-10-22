import { useLazyQuery } from '@apollo/client'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { fetchLoggedInUser } from '../graphql/queries/fetchLoggedInUser'
import { SEARCH_USERS_QUERY } from '../graphql/queries/searchUser'
import { useClickOutside, useMe } from '../hooks'
import styles from '../styles/select-members-modal.module.css'
import { TUser } from '../types/types'

export const SelectMembersModal = ({
  addMember,
  visible,
  onClose,
}: {
  addMember: (member: TUser) => void
  visible: boolean
  onClose: () => void
}) => {
  const { me } = fetchLoggedInUser()
  const [searchUsers, { data: searchResult, loading, error }] =
    useLazyQuery(SEARCH_USERS_QUERY)

  const [searchText, setSearchText] = useState('')
  useEffect(() => {
    if (!searchText) return
    searchUsers({ variables: { search: searchText } })
  }, [searchText])

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
        onChange={({ currentTarget: { value } }) => setSearchText(value)}
        autoFocus
        className={styles.input}
        type='text'
      />
      <div className={styles['search-list']}>
        {me?.friends.map((friend) => (
          <option
            className={styles.option}
            key={friend.id}
            onClick={() => {
              addMember(friend as TUser)
              onClose()
            }}
          >
            {friend.username}
          </option>
        ))}
      </div>
    </div>
  )
}
