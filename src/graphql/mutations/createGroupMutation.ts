import { gql, useMutation } from '@apollo/client'
import { TCreateGroupInput, TGroup } from '../../types/types'
import { FETCH_GROUPS_QUERY } from '../queries/fetchGroups'
import { FETCH_LOGGED_IN_USER_QUERY } from '../queries/fetchLoggedInUser'

const CREATE_GROUP_MUTATION = gql`
  mutation CreateGroup($userIds: [ID!]!, $title: String) {
    createGroup(userIds: $userIds, title: $title) {
      id
      title
      members {
        id
        username
      }
    }
  }
`

export const createGroupMutation = () =>
  useMutation<{ createGroup: TGroup }, TCreateGroupInput>(
    CREATE_GROUP_MUTATION,
    {
      refetchQueries: [
        { query: FETCH_GROUPS_QUERY },
        { query: FETCH_LOGGED_IN_USER_QUERY },
      ],
    }
  )
