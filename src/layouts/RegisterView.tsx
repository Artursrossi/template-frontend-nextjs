'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'react-toastify'

import { fetchAPI } from '@/utils/fetchAPI'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

const RegisterSchema = z.object({
  name: z.string({ required_error: 'Campo Obrigatório' }).min(4, 'Campo Obrigatório'),
  email: z
    .string({ required_error: 'Campo Obrigatório' })
    .min(1, 'Campo Obrigatório')
    .email('Este campo deve ser um email'),
  password: z
    .string({ required_error: 'Campo Obrigatório' })
    .regex(/^(?=.*[a-zA-Z])/, 'A senha deve conter uma letra')
    .regex(/^(?=.*\d)/, 'A senha deve conter um número')
    .regex(/^(?=.*[@.#$!%*?&^])/, 'A senha deve conter um caractere especial')
    .min(6, 'Mínimo de 6 caracteres')
    .max(32, 'Máximo de 32 caracteres'),
  repeatPassword: z
    .string({ required_error: 'Campo Obrigatório' })
    .min(6, 'Mínimo de 6 caracteres')
    .max(32, 'Máximo de 32 caracteres'),
})
type RegisterType = z.infer<typeof RegisterSchema>

export function RegisterView() {
  const router = useRouter()
  const methods = useForm<RegisterType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: undefined,
      email: undefined,
      password: undefined,
      repeatPassword: undefined,
    },
  })
  const { handleSubmit, formState, setError, register } = methods

  async function handleRegister(formsData: RegisterType) {
    if (formsData.password !== formsData.repeatPassword) {
      setError('repeatPassword', { message: 'As senhas não coincidem' })
      return
    }

    try {
      const registerResponse = await fetchAPI<{ message?: string }>('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formsData.name,
          email: formsData.email,
          password: formsData.password,
          repeatPassword: formsData.repeatPassword,
        }),
        credentials: 'include',
      })
      const { data } = registerResponse
      if (!registerResponse.ok) throw new Error('Ocorreu um erro. Tente novamente mais tarde...')

      if (data?.message && data?.message === 'Passwords Do Not Match') {
        setError('repeatPassword', { message: 'As senhas não coincidem' })
        return
      }
      if (data?.message && data?.message === 'Email Already Exists') {
        setError('email', { message: 'Email já existente' })
        return
      }

      toast.info('Conta criada com sucesso!')
      router.push('/login')
    } catch (error) {
      toast.error('Ocorreu um erro. Tente novamente mais tarde...')
    }
  }

  return (
    <div className="container-wrapper">
      <FormProvider {...methods}>
        <form
          className="mx-auto w-[96%] max-w-96 rounded-md border border-neutral-300 bg-containerLight px-3 py-4 shadow-md dark:border-neutral-800 dark:bg-containerDark md:px-5 md:py-6"
          onSubmit={handleSubmit(handleRegister)}
        >
          <img className="mx-auto mb-3 h-24 w-auto" src="/logo.png" alt="Logo" />

          <Input.Root>
            <Input.Label title="Nome" />
            <Input.InputField registerId="name" placeholder="Digite seu Nome" />
            <Input.Error registerId="name" />
          </Input.Root>

          <Input.Root>
            <Input.Label title="Email" />
            <Input.InputField registerId="email" placeholder="Digite seu Email" />
            <Input.Error registerId="email" />
          </Input.Root>

          <Input.Root>
            <Input.Label title="Senha" />
            <Input.InputField registerId="password" placeholder="Digite sua Senha" type="password" />
            <Input.Error registerId="password" />
          </Input.Root>

          <Input.Root>
            <Input.Label title="Repetir Senha" />
            <Input.InputField registerId="repeatPassword" placeholder="Repetir Senha" type="password" />
            <Input.Error registerId="repeatPassword" />
          </Input.Root>

          <Button type="submit" disabled={formState.isSubmitting} data-loading={formState.isSubmitting}>
            Cadastrar
          </Button>

          <Link
            className="mt-4 block text-center text-xs text-neutral-500 hover:underline dark:text-neutral-300"
            href="/login"
          >
            Já está cadastrado ?
          </Link>
        </form>
      </FormProvider>
    </div>
  )
}
