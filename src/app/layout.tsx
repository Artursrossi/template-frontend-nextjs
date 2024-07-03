import React from 'react'
import type { Metadata } from 'next'
import { ToastContainer } from 'react-toastify'

import '@/styles/globals.css'
import '@/styles/toastify.css'
import { UserGuard } from '@/contexts/UserGuard'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { cookies } from 'next/headers'

export const metadata: Metadata = {
  title: 'Artur Schincariol Rossi',
  description: 'Template developed  by Artur Schincariol Rossi',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  /* Theme Dark | Light */
  const theme = cookies().get('template_theme')?.value as string | undefined
  const isLightMode = theme && theme === 'light'

  return (
    <html lang="pt-br" className={isLightMode ? 'scroll-smooth' : 'dark scroll-smooth'}>
      <body className="relative min-h-screen bg-bodyLight text-textLight dark:bg-bodyDark dark:text-textDark">
        <UserGuard>
          <Header />
          <main className="w-full pb-[57px] pt-[57px] md:pb-[73px] md:pt-[65px]">{children}</main>
          <Footer />
        </UserGuard>
        <ToastContainer position="bottom-center" theme="dark" />
      </body>
    </html>
  )
}
