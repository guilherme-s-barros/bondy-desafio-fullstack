import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'

import type { Metadata } from 'next'

import { Button } from '@/components/ui/button'
import { SignInForm } from './sign-in-form'

export const metadata: Metadata = {
	title: 'Acessar conta',
}

export default function SignIn() {
	return (
		<main className="font-sans w-full h-full grid grid-rows-[auto_1fr_auto] p-16">
			<Button variant="link" className="justify-self-end" asChild>
				<Link href="/sign-up">
					Cadastrar-se <ArrowRightIcon />
				</Link>
			</Button>

			<div className="flex flex-col justify-center items-center gap-8">
				<div className="text-center space-y-1">
					<h1 className="text-3xl font-bold tracking-tight">Acessar conta</h1>
					<p className="text-muted-foreground leading-relaxed">
						Entre em sua conta e comece a organizar suas tarefas.
					</p>
				</div>

				<SignInForm />
			</div>
		</main>
	)
}
