import toast from 'react-hot-toast'
import { registerMutation } from '../graphql/mutations/registerMutation'
import { TRegisterInput, TRegisterError } from '../types/types'

export const useRegister = () => {
  const [mutation, { loading, error }] = registerMutation()

  const register = (registerInput: TRegisterInput) =>
    toast.promise(mutation({ variables: registerInput }), {
      loading: 'Registering',
      success: ({
        data: {
          register: { token, username },
        },
      }) => {
        localStorage.setItem('split_token', token)
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
