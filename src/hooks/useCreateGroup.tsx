import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { createGroupMutation } from '../graphql/mutations/createGroupMutation'
import { TCreateGroupInput } from '../types/types'

export const useCreateGroup = () => {
  const navigate = useNavigate()
  const [mutation, { loading, error }] = createGroupMutation()
  const createGroup = (createGroupInput: TCreateGroupInput) =>
    toast.promise(mutation({ variables: createGroupInput }), {
      loading: 'Creating group',
      success: ({
        data: {
          createGroup: { title, id },
        },
      }) => {
        navigate(`/groups/${id}`)
        return `${title} skapad!`
      },
      error: (error) => error.graphQLErrors[0].message,
    })

  return {
    createGroup,
    loading,
    error: error?.graphQLErrors[0]?.extensions.errors,
  }
}
