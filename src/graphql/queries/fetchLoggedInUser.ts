import { gql, useQuery } from '@apollo/client'
import { TUser } from '../../types/types'

const FETCH_LOGGED_IN_USER_QUERY = gql`
  query {
    getMe {
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

export const fetchLoggedInUser = () => {
  const { data, loading } = useQuery<{ getMe: TUser }, any>(
    FETCH_LOGGED_IN_USER_QUERY
  )

  return {
    me: data?.getMe ?? ({} as TUser),
    loading,
  }
}
