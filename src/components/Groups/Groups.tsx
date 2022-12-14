import React from 'react'
import { useGroups } from '../../hooks'
import styles from './groups.module.css'
import { GroupItem } from '../GroupItem/GroupItem'

export const Groups = () => {
  const { groups, loading } = useGroups()

  return (
    <div className={styles.container}>
      {groups.map((group) => (
        <GroupItem key={group.id} group={group} />
      ))}
    </div>
  )
}
