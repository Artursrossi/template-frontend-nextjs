import React, { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const root = tv({
  base: 'mb-3 max-w-sm',
})

type InputRootProps = ComponentProps<'div'> &
  VariantProps<typeof root> & {
    children: React.ReactNode
    className?: string
  }

export function InputRoot({ children, className, ...props }: InputRootProps) {
  return (
    <div className={root({ className })} {...props}>
      {children}
    </div>
  )
}
