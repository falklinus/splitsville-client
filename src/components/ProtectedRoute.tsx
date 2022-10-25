import React, { ReactNode, Suspense, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const ProtectedRouteInner = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem('split_token')) {
      navigate('/login')
    }
  }, [])

  return <>{children}</>
}

export const ProtectedRoute = ({ children }: { children: ReactNode }) => (
  <Suspense>
    <ProtectedRouteInner>{children}</ProtectedRouteInner>
  </Suspense>
)
