import Image from 'next/image'
import Link from 'next/link'

import type { Metadata } from 'next'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export const metadata: Metadata = {
	title: 'Acessar conta',
}

export default function SignIn() {
	return (
		<main className="font-sans flex h-screen items-center justify-center">
			<div className="flex flex-col items-center gap-8 p-4">
				<Image src="/logo.svg" alt="Bondy Logo" width={200} height={200} />

				<div className="text-center space-y-1">
					<h1 className="text-2xl font-bold">Acessar conta</h1>
					<p className="text-muted-foreground">
						Para entrar na aplicação, é necessário se autenticar.
					</p>
				</div>

				<form className="flex w-full flex-col space-y-4">
					<div className="space-y-2">
						<Label>Seu e-mail</Label>
						<Input type="email" placeholder="Informe seu e-mail" />
					</div>

					<div className="space-y-2">
						<Label>Sua senha</Label>
						<Input type="password" placeholder="Informe sua senha" />
					</div>

					<Button type="submit">Continuar</Button>

					<Button variant="link" asChild>
						<Link href="#visual-only-link">Não possuo uma conta</Link>
					</Button>
				</form>
			</div>
		</main>
	)
}
