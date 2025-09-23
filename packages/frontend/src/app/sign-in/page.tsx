import Image from 'next/image'

import type { Metadata } from 'next'

import { SignInForm } from './sign-in-form'

export const metadata: Metadata = {
	title: 'Acessar conta',
}

export default function SignIn() {
	return (
		<main className="font-sans flex h-screen items-center justify-center">
			<div className="flex flex-col items-center gap-8 p-4">
				<Image
					className="ml-2"
					src="/logo.svg"
					alt="Bondy Logo"
					width={200}
					height={200}
				/>

				<div className="text-center space-y-1">
					<h1 className="text-3xl font-bold tracking-tight">Acessar conta</h1>
					<p className="text-muted-foreground">
						Para entrar na aplicação, é necessário se autenticar.
					</p>
				</div>

				<SignInForm />
			</div>
		</main>
	)
}
