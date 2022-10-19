import { fetchExpenseById } from '../graphql/queries/fetchExpenseById'

export const useExpense = (expenseId?: string) => {
  if (!expenseId) {
    return {
      expense: undefined,
      loading: false,
    }
  }
  const { expense, loading } = fetchExpenseById(expenseId)

  return {
    expense: expense ?? undefined,
    loading,
  }
}
