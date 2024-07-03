'use client'

import React, { useContext } from 'react'

import { UserContext } from '@/contexts/UserContext'

export function DashboardView() {
  const { user } = useContext(UserContext)

  return (
    <section>
      <h1>Dashboard</h1>
      <div className="flex flex-col">
        <span>Seu nome é {user?.name}</span>
        <span>Seu email é {user?.email}</span>
      </div>
    </section>
  )
}
