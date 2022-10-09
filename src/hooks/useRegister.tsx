import toast from 'react-hot-toast'
import { registerMutation } from '../graphql/mutations/registerMutation'
import { TRegisterInput, TRegisterError } from '../types/types'
import { useAuth } from './useAuth'

export const useRegister = () => {
  const [mutation, { loading, error }] = registerMutation()
  const { loginUser } = useAuth()

  const register = (registerInput: TRegisterInput) =>
    toast.promise(mutation({ variables: registerInput }), {
      loading: 'Registering',
      success: ({
        data: {
          register: { id, token, username, email },
        },
      }) => {
        loginUser({ username, id, email }, token)
        return `Welcome ${username}!`
      },
      error: (error) => error.graphQLErrors[0].message,
    })

  return {
    register,
    loading,
    error: error?.graphQLErrors[0]?.extensions.errors as TRegisterError,
  }
}
