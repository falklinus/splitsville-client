import toast from 'react-hot-toast'
import { loginMutation } from '../graphql/mutations/loginMutation'
import { TLoginInput, TLoginError } from '../types/types'

export const useLogin = () => {
  const [mutation, { loading, error }] = loginMutation()
  const login = (loginInput: TLoginInput) =>
    toast.promise(mutation({ variables: loginInput }), {
      loading: 'Logging in',
      success: ({
        data: {
          login: {token, username },
        },
      }) => {
        localStorage.setItem('split_token', token)
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
