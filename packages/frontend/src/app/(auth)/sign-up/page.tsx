import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'

import type { Metadata } from 'next'

import { Button } from '@/components/ui/button'
import { SignUpForm } from './sign-up-form'

export const metadata: Metadata = {
	title: 'Criar conta',
}

export default function SignUp() {
	return (
		<main className="font-sans w-full h-full grid grid-rows-[auto_1fr_auto] p-16">
			<Button variant="link" className="justify-self-end" asChild>
				<Link href="/sign-in">
					Já possuo uma conta <ArrowRightIcon />
				</Link>
			</Button>

			<div className="flex flex-col justify-center items-center gap-8">
				<div className="text-center space-y-1">
					<h1 className="text-3xl font-bold tracking-tight">Criar uma conta</h1>
					<p className="text-muted-foreground leading-relaxed">
						Cadastre-se e comece a organizar suas tarefas.
					</p>
				</div>

				<SignUpForm />
			</div>
		</main>
	)
}
