import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#4f46e5',
        secondary: '#4338ca',

        /* Light Mode */
        containerLight: '#e5e5e5',
        bodyLight: '#fafafa',
        textLight: '#404040',

        /* Dark Mode */
        containerDark: '#171717',
        bodyDark: '#121212',
        textDark: '#fafafa',
      },
    },
    screens: {
      xxs: '360px', // => @media (min-width: 360px) { ... }
      xs: '480px', // => @media (min-width: 480px) { ... }
      sm: '640px', // => @media (min-width: 640px) { ... }
      md: '768px', // => @media (min-width: 768px) { ... }
      lg: '1024px', // => @media (min-width: 1024px) { ... }
      xl: '1280px', // => @media (min-width: 1280px) { ... }
      '2xl': '1536px', // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.container-wrapper': {
          display: 'flex',
          'align-items': 'center',
          height: 'calc(100vh - 114px)',
          overflow: 'auto',
          '@screen md': {
            height: 'calc(100vh - 138px)',
          },
        },
      })
    }),
  ],
}
export default config
