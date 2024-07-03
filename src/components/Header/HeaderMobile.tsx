'use client'

import React from 'react'
import Link from 'next/link'
import * as Dialog from '@radix-ui/react-dialog'
import { List, XCircle } from '@phosphor-icons/react'

export const HeaderMobile = () => {
  return (
    <div className="flex items-center justify-between px-6 py-1">
      <Link href="/">
        <img alt="Logo" src="/logo.png" className="h-12 w-auto"></img>
      </Link>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button type="button">
            <List size={24} className="text-textLight dark:text-textDark" />
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[98] bg-[rgba(0,0,0,.75)]" />
          <Dialog.Content className="fixed bottom-0 left-0 right-1/3 top-0 z-[99] overflow-y-auto bg-containerLight focus:outline-none dark:bg-containerDark">
            <Dialog.Close asChild>
              <button
                className="absolute right-3 top-3 appearance-none bg-transparent text-textLight focus:shadow-md focus:outline-none dark:text-textDark"
                aria-label="Fechar"
              >
                <XCircle size={20} />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}
