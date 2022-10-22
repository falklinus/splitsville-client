import { fetchLoggedInUser } from '../graphql/queries/fetchLoggedInUser'
import { TUser } from '../types/types'

export const useMe = () => {
  const { me, loading, error } = fetchLoggedInUser()

  return {
    me,
    loading,
    error,
  }
}
