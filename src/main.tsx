import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { AccountPage, HomePage, ActivityPage, LandingPage } from './pages'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import apolloClient from './apolloClient'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/register',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <HomePage />,
  },
  {
    path: '/dashboard',
    element: <HomePage />,
  },
  {
    path: '/activity',
    element: <ActivityPage />,
  },
  {
    path: '/account',
    element: <AccountPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
)
