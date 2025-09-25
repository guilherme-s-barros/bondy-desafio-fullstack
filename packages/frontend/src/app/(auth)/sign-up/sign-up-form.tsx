'use client'

import { LogInIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import type { FormEvent } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function SignUpForm() {
	const navigate = useRouter()

	async function handleAuthenticate(event: FormEvent<HTMLFormElement>) {
		event.preventDefault()

		const formData = new FormData(event.currentTarget)

		const email = formData.get('email')
		const password = formData.get('password')

		console.log({
			email,
			password,
		})

		toast.success('Conta criada com sucesso!')
		navigate.push('/')
	}

	return (
		<form
			className="flex w-full flex-col space-y-4"
			onSubmit={handleAuthenticate}
		>
			<div className="space-y-1">
				<Label>Seu nome</Label>

				<Input
					type="text"
					className="bg-background"
					name="name"
					placeholder="Informe seu nome completo"
					required
				/>
			</div>

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

			<div className="space-y-1">
				<Label>Sua empresa</Label>

				<Input
					type="text"
					className="bg-background"
					name="company"
					placeholder="Informe o nome da sua empresa"
				/>
			</div>

			<Button type="submit">
				Continuar
				<LogInIcon />
			</Button>
		</form>
	)
}
