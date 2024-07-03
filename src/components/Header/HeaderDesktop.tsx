'use client'

import React from 'react'
import Link from 'next/link'

import { SwitchTheme } from '../SwitchTheme'

export const HeaderDesktop = () => {
  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
      <Link href="/" className="block">
        <img alt="Logo" src="/logo.png" className="h-12 w-auto"></img>
      </Link>
      <SwitchTheme />
    </div>
  )
}
