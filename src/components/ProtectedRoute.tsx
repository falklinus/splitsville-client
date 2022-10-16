import React, { ReactNode, useEffect } from 'react'
import { redirect } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {

  const { user } = useAuth()

  useEffect(() => {
    if (!user?.id) {
      redirect('/auth')
    }
  }, [user?.id])

  return <>{children}</>
}
