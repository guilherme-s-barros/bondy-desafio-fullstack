'use client'

import { gql } from '@apollo/client'
import { useMutation } from '@apollo/client/react'
import { LogInIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import type { FormEvent } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const AUTHENTICATE = gql`
  mutation Authenticate($email: String!, $password: String!) {
    authenticate(email: $email, password: $password) {
			id
			name
			email
			company
    }
  }
`

export function SignInForm() {
	const navigate = useRouter()
	const [authenticate, { loading, error, called }] = useMutation(AUTHENTICATE)

	async function handleAuthenticate(event: FormEvent<HTMLFormElement>) {
		event.preventDefault()

		const formData = new FormData(event.currentTarget)

		const email = formData.get('email')
		const password = formData.get('password')

		try {
			await authenticate({
				variables: {
					email,
					password,
				},
			})

			toast.success('Login realizado com sucesso!')
			navigate.push('/')
		} catch {
			toast.error('Erro ao realizar login!')
		}
	}

	const success = called && !error

	return (
		<form
			className="flex w-full flex-col space-y-4"
			onSubmit={handleAuthenticate}
		>
			<div className="space-y-1">
				<Label>E-mail</Label>

				<Input
					type="email"
					className="bg-background"
					name="email"
					placeholder="Informe seu e-mail"
					required
				/>
			</div>

			<div className="space-y-1">
				<Label>Senha</Label>

				<Input
					type="password"
					className="bg-background"
					name="password"
					placeholder="Informe sua senha"
					required
				/>
			</div>

			<Button type="submit" disabled={loading || success}>
				Continuar
				<LogInIcon />
			</Button>
		</form>
	)
}
