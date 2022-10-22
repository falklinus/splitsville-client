import React, { ReactNode, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import { useMe } from '../hooks'

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate()
  const { me } = useMe()

  useEffect(() => {
    if (!me?.id) {
      navigate('/auth')
    }
  }, [me?.id])

  return <>{children}</>
}
