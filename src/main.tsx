import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import {
  Account,
  Home,
  Activity,
  Auth,
  Group,
  Expense,
  AddExpense,
  CreateGroup,
} from './pages'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import apolloClient from './graphql/apolloClient'
import { ErrorBoundary } from './components'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from './hooks/useAuth'
import { ProtectedRoute } from './components/ProtectedRoute'

const router = createBrowserRouter([
  {
    path: '/auth',
    element: <Auth />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/register',
    element: <Auth />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/login',
    element: <Auth />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/home',
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/groups',
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/groups/create',
    element: (
      <ProtectedRoute>
        <CreateGroup />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/groups/:groupId',
    element: (
      <ProtectedRoute>
        <Group />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/groups/:groupId/add-expense',
    element: (
      <ProtectedRoute>
        <AddExpense />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/expenses/:expenseId',
    element: (
      <ProtectedRoute>
        <Expense />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/activity',
    element: (
      <ProtectedRoute>
        <Activity />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/account',
    element: (
      <ProtectedRoute>
        <Account />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster />
      </AuthProvider>
    </ApolloProvider>
  </React.StrictMode>
)
