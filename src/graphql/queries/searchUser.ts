import { gql, useQuery } from '@apollo/client'
import { TUser } from '../../types/types'

export const SEARCH_USERS_QUERY = gql`
  query ($searchTerm: String) {
    searchUsers(searchTerm: $searchTerm) {
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
