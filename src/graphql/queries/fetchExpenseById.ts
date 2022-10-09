import { gql, useQuery } from '@apollo/client'
import { TExpense } from '../../types/types'

const FETCH_EXPENSE_BY_ID = gql`
  query GetExpense($expenseId: ID!) {
    getExpense(expenseId: $expenseId) {
      id
      title
      amount
      createdAt
      createdBy {
        id
        username
      }
      paidBy {
        id
        username
      }
      shares {
        share
        user {
          id
          username
        }
      }
    }
  }
`

export const fetchExpenseById = (expenseId: string) => {
  const { data, loading } = useQuery<
    { getExpense: TExpense },
    { expenseId: string }
  >(FETCH_EXPENSE_BY_ID, { variables: { expenseId } })

  return { expense: data?.getExpense, loading }
}
