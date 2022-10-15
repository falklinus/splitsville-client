import React, { createContext, ReactNode, useContext, useState } from 'react'
import { TUser } from '../types/types'
import jwtDecode, { JwtPayload } from 'jwt-decode'

export const getUserFromStorage = () => {
  const TOKEN = localStorage.getItem('split_token')

  if (!TOKEN)
    return {
      username: '',
      email: '',
      id: '',
    }

  const decodedToken = jwtDecode<
    JwtPayload & { username: string; id: string; email: string }
  >(TOKEN)

  if (decodedToken.exp && decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem('split_token')
    return {
      username: '',
      email: '',
      id: '',
    }
  }
  return {
    username: decodedToken.username,
    email: decodedToken.email,
    id: decodedToken.id,
  }
}

const AuthContext = createContext({
  user: { username: '', email: '', id: '' },
  loginUser: (data: TUser, token: string) => {},
  logoutUser: () => {},
})

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(getUserFromStorage())

  const loginUser = ({ username, email, id }: TUser, token: string) => {
    localStorage.setItem('split_token', token)

    setUser({ username, id, email })
  }

  const logoutUser = () => {
    localStorage.removeItem('split_token')

    setUser({
      username: '',
      email: '',
      id: '',
    })
  }

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)