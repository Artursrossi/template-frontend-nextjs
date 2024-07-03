import React, { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const label = tv({
  base: 'ml-1 block text-sm text-textLight dark:text-textDark',
})

type InputLabelProps = ComponentProps<'label'> &
  VariantProps<typeof label> & {
    title: string
    required?: boolean
  }

export function InputLabel({ title, required, className, ...props }: InputLabelProps) {
  return (
    <label className={label({ className })} {...props}>
      {title}
      {required && <span className="pl-1 text-sm text-red-500">*</span>}
    </label>
  )
}
