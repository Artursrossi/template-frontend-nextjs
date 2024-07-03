'use client'

import React from 'react'

import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'

export const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-0 right-0 w-full border-t border-neutral-300 bg-containerLight dark:border-neutral-800 dark:bg-containerDark">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-2 md:px-6 md:py-4">
        <img src="/logo-quadrada.png" alt="Logo" className="size-10" />
        <div className="ml-5 hidden xxs:block">
          <p className="text-xs text-textLight/40 dark:text-textDark/40 sm:text-sm">
            Desenvolvido por
            <a
              className="ml-1 text-sm text-textLight/90 hover:text-textLight/70 dark:text-textDark/90 dark:hover:text-textDark/70 sm:text-base"
              href="https://www.artursrossi.com.br/"
              target="_blank"
              rel="noreferrer"
            >
              Artur Schincariol Rossi
            </a>
          </p>
        </div>
        <div className="flex gap-2">
          <a
            className="block h-auto w-full rounded-full border border-neutral-300 bg-bodyLight/20 p-2 transition-all hover:border-neutral-400 hover:bg-bodyLight/40 dark:border-neutral-800 dark:bg-bodyDark/20 dark:hover:border-neutral-700"
            href="https://www.linkedin.com/in/artursrossi"
            title="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinLogo size={20} />
          </a>
          <a
            className="block h-auto w-full rounded-full border border-neutral-300 bg-bodyLight/20 p-2 transition-all hover:border-neutral-400 hover:bg-bodyLight/40 dark:border-neutral-800 dark:bg-bodyDark/20 dark:hover:border-neutral-700"
            href="https://github.com/artursrossi/"
            title="Github"
            target="_blank"
            rel="noreferrer"
          >
            <GithubLogo size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
