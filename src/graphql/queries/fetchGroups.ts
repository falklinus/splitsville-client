import { useQuery, gql } from '@apollo/client'
import { TGroup } from '../../types/types'

export const FETCH_GROUPS_QUERY = gql`
  query {
    getGroups {
      id
      title
      members {
        id
        username
      }
      expenses {
        id
        groupId
        amount
        paidBy {
          id
        }
        shares {
          share
          user {
            id
          }
        }
      }
      createdAt
      createdBy {
        id
        username
      }
    }
  }
`

export const fetchGroups = () => {
  const { data, loading } = useQuery<{ getGroups: TGroup[] }, any>(
    FETCH_GROUPS_QUERY
  )

  return {
    groups: data?.getGroups ?? [],
    loading,
  }
}
