import React from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { DashboardView } from '@/layouts/DashboardView'

export default function DashboardOverview() {
  const token = cookies().get('template_auth')?.value
  if (!token) redirect('/login')

  return <DashboardView />
}
