import { gql, useMutation } from '@apollo/client'

const LOGIN_USER_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(loginInput: { email: $email, password: $password }) {
      id
      email
      username
      createdAt
      token
    }
  }
`

export const loginMutation = () => useMutation(LOGIN_USER_MUTATION)
