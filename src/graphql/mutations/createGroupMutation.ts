import { gql, useMutation } from '@apollo/client'

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

export const createGroupMutation = () => useMutation(CREATE_GROUP_MUTATION)
