'use server'

import React from 'react'
import { cookies } from 'next/headers'

import { decodeJWT } from '@/utils/decodeJWT'
import { UserProvider } from './UserContext'

interface UserGuardProps {
  children: React.ReactNode
}

export async function UserGuard({ children }: UserGuardProps) {
  const token = cookies().get('template_user')?.value
  const user: JWT_User = token ? decodeJWT(token) : null

  return <UserProvider userData={user}>{children}</UserProvider>
}
