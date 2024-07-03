import React, { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  slots: {
    base: 'h-12 w-full rounded-md bg-primary px-10 text-base font-medium text-white shadow-sm transition-all hover:bg-secondary',
  },
})

const { base } = button()

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button className={base({ className })} {...props}>
      {children}
    </button>
  )
}
