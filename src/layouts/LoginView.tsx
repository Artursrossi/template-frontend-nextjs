'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'react-toastify'

import { fetchAPI } from '@/utils/fetchAPI'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

const LoginSchema = z.object({
  email: z
    .string({ required_error: 'Campo Obrigatório' })
    .min(1, 'Campo Obrigatório')
    .email('Este campo deve ser um email'),
  password: z
    .string({ required_error: 'Campo Obrigatório' })
    .min(6, 'Mínimo de 6 caracteres')
    .max(32, 'Máximo de 32 caracteres'),
})
type LoginType = z.infer<typeof LoginSchema>

export function LoginView() {
  const router = useRouter()
  const methods = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: undefined,
      password: undefined,
    },
  })
  const { handleSubmit, formState, setError, register } = methods

  async function handleLogin(formsData: LoginType) {
    try {
      const loginResponse = await fetchAPI<{ message?: string }>('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formsData.email,
          password: formsData.password,
        }),
        credentials: 'include',
      })

      const { data } = loginResponse

      if (data?.message && data?.message === 'Invalid Credentials') {
        setError('email', { message: 'Email ou senha inválidos' })
        return
      }
      if (!loginResponse.ok) throw new Error('Ocorreu um erro. Tente novamente mais tarde...')

      toast.info('Login realizado com sucesso!')
      router.push('/dashboard')
    } catch (error) {
      console.error(error)
      toast.error('Ocorreu um erro. Tente novamente mais tarde...')
    }
  }

  return (
    <div className="container-wrapper">
      <FormProvider {...methods}>
        <form
          className="mx-auto w-[96%] max-w-96 rounded-md border border-neutral-300 bg-containerLight px-3 py-4 shadow-md dark:border-neutral-800 dark:bg-containerDark md:px-5 md:py-6"
          onSubmit={handleSubmit(handleLogin)}
        >
          <img className="mx-auto h-auto w-full max-w-64" src="/logo.png" alt="Logo" />

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

          <Button type="submit" data-loading={formState.isSubmitting} disabled={formState.isSubmitting}>
            Entrar
          </Button>

          <Link
            className="mt-4 block text-center text-xs text-neutral-500 hover:underline dark:text-neutral-300"
            href="/register"
          >
            Ainda não possui uma conta ?
          </Link>
        </form>
      </FormProvider>
    </div>
  )
}
