'use client'

import { gql } from '@apollo/client'
import { useMutation } from '@apollo/client/react'
import { CheckCircleIcon } from 'lucide-react'
import Link from 'next/link'
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
	const [authenticate, { loading, data }] = useMutation(AUTHENTICATE)

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

	return (
		<form
			className="flex w-full flex-col space-y-4"
			onSubmit={handleAuthenticate}
		>
			<div className="space-y-2">
				<Label>Seu e-mail</Label>
				<Input
					type="email"
					name="email"
					placeholder="Informe seu e-mail"
					required
				/>
			</div>

			<div className="space-y-2">
				<Label>Sua senha</Label>
				<Input
					type="password"
					name="password"
					placeholder="Informe sua senha"
					required
				/>
			</div>

			{data ? (
				<Button type="submit" disabled variant="success">
					<CheckCircleIcon />
					Sucesso
				</Button>
			) : (
				<Button type="submit" disabled={loading}>
					Continuar
				</Button>
			)}

			<Button variant="link" asChild>
				<Link href="#visual-only-link">Não possuo uma conta</Link>
			</Button>
		</form>
	)
}
