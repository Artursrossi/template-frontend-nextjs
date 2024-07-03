'use client'

import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container-wrapper">
      <div className="mx-auto w-[96%] max-w-96 rounded-md border border-neutral-300 bg-containerLight px-3 py-4 shadow-md dark:border-neutral-800 dark:bg-containerDark md:px-5 md:py-6">
        <img className="mx-auto h-auto w-full max-w-64" src="/logo.png" alt="Logo" />
        <h1 className="text-center text-xl font-semibold xs:text-2xl">Página Não Encontrada</h1>
        <Link
          href="/"
          title="Ir para página principal"
          className="mt-4 inline-flex h-12 w-full items-center justify-center rounded-md bg-primary px-4 text-base text-white hover:bg-secondary"
        >
          Retornar
        </Link>
      </div>
    </div>
  )
}
