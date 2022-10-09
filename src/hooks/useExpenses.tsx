import { fetchExpenses } from '../graphql/queries/fetchExpenses'

export const useExpenses = () => {
  const { expenses, loading } = fetchExpenses()

  const totalAmount = expenses.reduce((sum, item) => sum + item.amount, 0)

  return {
    expenses,
    totalAmount,
    loading,
  }
}
