import { PlusIcon, Trash2Icon } from 'lucide-react'
import { redirect } from 'next/navigation'
import { use } from 'react'

import { getProfile } from '@/api/get-profile'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'

export default function Home() {
	const profile = use(getProfile())

	if (!profile) {
		redirect('/sign-in')
	}

	return (
		<main className="font-sans px-4 py-16 mx-auto max-w-[720px] space-y-8">
			<div>
				<h1 className="text-3xl font-bold tracking-tight">Minhas tarefas</h1>
				<p className="text-muted-foreground leading-relaxed">
					Bem-vindo de volta, {profile.name}!
				</p>
			</div>

			<div className="flex flex-col gap-4">
				<form className="flex gap-4">
					<Input type="text" placeholder="O que você precisa fazer..." />

					<Button type="submit">
						Adicionar <PlusIcon />
					</Button>
				</form>

				<div className="flex items-center justify-between text-xs">
					<span>
						Tarefas: <strong>4</strong>
					</span>
					<span>
						Concluídas: <strong>4</strong>
					</span>
				</div>

				<div className="bg-secondary rounded-sm p-4">
					<div className="flex items-center justify-between [&+&]:border-t pt-2 mb-2">
						<div className="flex items-center gap-2">
							<Checkbox />
							<p className="text-sm">Estudar música</p>
						</div>

						<Button variant="secondary" size="icon-sm">
							<Trash2Icon className="text-destructive" />
						</Button>
					</div>

					<div className="flex items-center justify-between [&+&]:border-t pt-2 mb-2">
						<div className="flex items-center gap-2">
							<Checkbox />
							<p className="text-sm">Ir à faculdade</p>
						</div>

						<Button variant="secondary" size="icon-sm">
							<Trash2Icon className="text-destructive" />
						</Button>
					</div>

					<div className="flex items-center justify-between [&+&]:border-t pt-2 mb-2">
						<div className="flex items-center gap-2">
							<Checkbox />
							<p className="text-sm">Ir ao mercado</p>
						</div>

						<Button variant="secondary" size="icon-sm">
							<Trash2Icon className="text-destructive" />
						</Button>
					</div>

					<div className="flex items-center justify-between [&+&]:border-t pt-2 mb-2">
						<div className="flex items-center gap-2">
							<Checkbox checked />
							<p className="text-sm">Estudar programação</p>
						</div>

						<Button variant="secondary" size="icon-sm">
							<Trash2Icon className="text-destructive" />
						</Button>
					</div>
				</div>
			</div>
		</main>
	)
}
