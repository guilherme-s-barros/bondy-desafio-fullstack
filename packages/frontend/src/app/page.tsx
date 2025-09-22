import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function Home() {
	return (
		<main className="flex h-screen items-center justify-center">
			<div className="space-y-8">
				<div className="text-center space-y-1">
					<h1 className="text-2xl font-bold">Acessar conta</h1>
					<p className="text-muted-foreground">
						Para entrar no sistema, é necessário se autenticar.
					</p>
				</div>

				<form className="flex flex-col space-y-4">
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
						<Link href="/">Não possuo uma conta</Link>
					</Button>
				</form>
			</div>
		</main>
	)
}
