import toast from 'react-hot-toast'
import { loginMutation } from '../graphql/mutations/loginMutation'
import { TLoginInput, TLoginError } from '../types/types'
import { handleLogin } from '../util'

export const useLogin = () => {
  const [mutation, { loading, error }] = loginMutation()
  const login = (loginInput: TLoginInput) =>
    toast.promise(mutation({ variables: loginInput }), {
      loading: 'Loggar in',
      success: ({
        data: {
          login: { token, username },
        },
      }) => {
        handleLogin(token)
        return `Välkommen ${username}!`
      },
      error: (error) => {
        console.log(error)
        console.log('hej')
        return error.graphQLErrors[0].message
      },
    })

  return {
    login,
    loading,
    error: error?.graphQLErrors[0]?.extensions.errors as TLoginError,
  }
}
