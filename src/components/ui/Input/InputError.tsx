import React, { ComponentProps } from 'react'
import { useFormContext } from 'react-hook-form'
import { VariantProps, tv } from 'tailwind-variants'

const span = tv({
  base: 'mt-1 block pl-2 text-sm text-red-500',
})

type InputErrorProps = ComponentProps<'span'> &
  VariantProps<typeof span> & {
    registerId: string
  }

export function InputError({ registerId, className, ...props }: InputErrorProps) {
  const { formState } = useFormContext()

  return (
    <>
      {formState.errors[registerId] && (
        <span className={span({ className })} {...props}>
          {formState.errors[registerId]?.message?.toString()}
        </span>
      )}
    </>
  )
}
