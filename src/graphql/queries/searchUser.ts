import { gql, useQuery } from '@apollo/client'
import { TUser } from '../../types/types'

export const SEARCH_USERS_QUERY = gql`
  query ($search: String) {
    searchUsers(search: $search) {
      id
      username
      email
      friends {
        id
        username
        email
      }
    }
  }
`

export const searchUsers = (search: string) => {
  return useQuery<{ searchUsers: TUser[] }, { search: string }>(
    SEARCH_USERS_QUERY,
    {
      variables: {
        search,
      },
    }
  )
}
