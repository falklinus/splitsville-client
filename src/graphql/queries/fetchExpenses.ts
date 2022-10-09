import { useQuery, gql } from '@apollo/client'
import { TExpense } from '../../types/types'

const FETCH_EXPENSES_QUERY = gql`
  query {
    getExpenses {
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

export const fetchExpenses = () => {
  const { data, loading } = useQuery<{ getExpenses: TExpense[] }, any>(
    FETCH_EXPENSES_QUERY
  )

  return {
    expenses: data?.getExpenses ?? [],
    loading,
  }
}
