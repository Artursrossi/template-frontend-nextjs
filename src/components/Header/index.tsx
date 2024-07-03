'use client'

import React, { useEffect, useState } from 'react'
import { HeaderDesktop } from './HeaderDesktop'
import { HeaderMobile } from './HeaderMobile'

export const Header = () => {
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    handleResise()
    window.addEventListener('resize', handleResise)

    function handleResise() {
      if (window.innerWidth > 768) {
        setIsMobile(false)
        return
      }

      setIsMobile(true)
    }
  }, [])

  return (
    <header className="fixed z-[10] w-full border-b border-neutral-300 bg-containerLight shadow-sm transition-all dark:border-neutral-800 dark:bg-containerDark">
      {/* Header Desktop */}
      {!isMobile && <HeaderDesktop />}

      {/* Header Mobile */}
      {isMobile && <HeaderMobile />}
    </header>
  )
}
