import { fetchGroups } from '../graphql/queries/fetchGroups'

export const useGroups = () => {
  const { groups, loading } = fetchGroups()

  return {
    groups,
    loading,
  }
}
