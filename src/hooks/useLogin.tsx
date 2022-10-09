import toast from 'react-hot-toast'
import { loginMutation } from '../graphql/mutations/loginMutation'
import { TLoginInput, TLoginError } from '../types/types'
import { useAuth } from './useAuth'

export const useLogin = () => {
  const [mutation, { loading, error }] = loginMutation()
  const { loginUser } = useAuth()
  const login = (loginInput: TLoginInput) =>
    toast.promise(mutation({ variables: loginInput }), {
      loading: 'Logging in',
      success: ({
        data: {
          login: { id, token, username, email },
        },
      }) => {
        loginUser({ username, email, id }, token)
        return `Welcome ${username}!`
      },
      error: (error) => error.graphQLErrors[0].message,
    })

  return {
    login,
    loading,
    error: error?.graphQLErrors[0]?.extensions.errors as TLoginError,
  }
}
