'use client'

import React, { createContext, useState } from 'react'
import { toast } from 'react-toastify'

import { fetchAPI } from '@/utils/fetchAPI'

interface UserContext {
  user: JWT_User | null
  logout(): Promise<void>
}

export const UserContext = createContext<UserContext>({} as UserContext)

interface ProviderProps {
  children: React.ReactNode
  userData: JWT_User | null
}
export function UserProvider({ children, userData }: ProviderProps): JSX.Element {
  const [user, setUser] = useState<JWT_User | null>(userData)

  async function logout() {
    try {
      await fetchAPI('/logout', {
        method: 'GET',
        credentials: 'include',
      })
      toast.info('Logout realizado com sucesso')
      setUser(null)
    } catch (error) {
      console.error(error)
      toast.error('Ocorreu um erro. Tente novamente mais tarde...')
    }
  }

  return (
    <UserContext.Provider
      value={{
        user,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
