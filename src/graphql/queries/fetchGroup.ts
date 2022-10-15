import { useQuery, gql } from '@apollo/client'
import { TGroup } from '../../types/types'

const FETCH_GROUP_QUERY = gql`
  query GetGroup($groupId: ID!) {
    getGroup(groupId: $groupId) {
      id
      title
      members {
        id
        username
      }
      expenses {
        id
        groupId
        title
        amount
        createdAt
        createdBy {
          id
          username
        }
        paidBy {
          id
          username
        }
        shares {
          share
          user {
            id
            username
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

export const fetchGroup = (groupId: string) => {
  const { data, loading } = useQuery<{ getGroup: TGroup }, any>(
    FETCH_GROUP_QUERY,
    {
      variables: {
        groupId,
      },
    }
  )

  return {
    group: data?.getGroup ?? ({} as TGroup),
    loading,
  }
}
