import { fetchGroup } from '../graphql/queries/fetchGroup'

export const useGroup = (groupId: string) => {
  const { group, loading } = fetchGroup(groupId)

  const totalAmount = group?.expenses?.reduce(
    (sum, item) => sum + item.amount,
    0
  )

  return {
    group,
    totalAmount,
    loading,
  }
}
