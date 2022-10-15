import React from 'react'
import { Link } from 'react-router-dom'
import { useGroups } from '../hooks'
import styles from '../styles/groups.module.css'
import { GroupItem } from './GroupItem'

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
