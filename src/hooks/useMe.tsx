import { fetchLoggedInUser } from '../graphql/queries/fetchLoggedInUser'

export const useMe = () => {
  const { me, loading } = fetchLoggedInUser()

  return {
    me,
    loading,
  }
}
