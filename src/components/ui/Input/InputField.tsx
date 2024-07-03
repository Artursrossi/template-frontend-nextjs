import React, { ComponentProps } from 'react'
import { useFormContext } from 'react-hook-form'
import { VariantProps, tv } from 'tailwind-variants'

const input = tv({
  base: `bg-bodyLight w-full mt-1 dark:bg-bodyDark placeholder:text-neutral-400 text-textLight dark:text-textDark rounded-md h-10 outline-none text-sm focus:ring-primary focus:ring-2 px-3`,
})

type InputProps = ComponentProps<'input'> &
  VariantProps<typeof input> & {
    registerId: string
  }

export function InputField({ registerId, className, ...props }: InputProps) {
  const { register } = useFormContext()

  return <input className={input({ className })} {...register(registerId)} {...props} />
}
