import React, { ReactNode, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate()
  const { user } = useAuth()

  useEffect(() => {
    if (!user?.id) {
      navigate('/auth')
    }
  }, [user?.id])

  return <>{children}</>
}
