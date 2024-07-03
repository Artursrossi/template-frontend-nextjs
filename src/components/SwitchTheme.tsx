'use client'

import React, { useEffect, useState } from 'react'
import { Moon, Sun } from '@phosphor-icons/react'
import { setCookie, parseCookies } from 'nookies'

export const SwitchTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null)

  function handleSwitchTheme() {
    const htmlElement = document.querySelector('html')
    /* Dark to Light */
    if (htmlElement?.classList.contains('dark')) {
      htmlElement?.classList.remove('dark')
      /* Save user theme on cookie */
      setCookie(null, 'template_theme', 'light', {
        path: '/',
        maxAge: 60 * 60 * 24 * 30, // 30 days
      })
      setIsDarkMode(false)
      return
    }

    /* Light to Dark */
    htmlElement?.classList.add('dark')
    /* Save user theme on cookie */
    setCookie(null, 'template_theme', 'dark', {
      path: '/',
      maxAge: 60 * 60 * 24 * 30, // 30 days
    })
    setIsDarkMode(true)
  }

  useEffect(() => {
    /* Get user theme */
    const cookies = parseCookies()
    const theme = cookies.template_theme
    const isDarkMode = theme === 'light' ? false : true
    setIsDarkMode(isDarkMode)
  }, [])

  return (
    <>
      {isDarkMode !== null && (
        <button
          type="button"
          title="Tema"
          onClick={() => {
            handleSwitchTheme()
          }}
        >
          {isDarkMode === false && <Moon size={20} className="text-textLight dark:text-textDark" />}
          {isDarkMode === true && <Sun size={20} className="text-textLight dark:text-textDark" />}
        </button>
      )}
    </>
  )
}
