import { ChevronDownIcon, LogOutIcon } from 'lucide-react'
import { redirect } from 'next/navigation'
import { use } from 'react'

import { getProfile } from '@/api/get-profile'
import { Button } from './ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from './ui/dropdown-menu'

export function ProfileMenu() {
	const profile = use(getProfile())

	if (!profile) {
		redirect('/sign-in')
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline">
					{profile.name}
					<ChevronDownIcon />
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent align="end">
				<DropdownMenuLabel className="flex flex-col gap-2">
					<strong className="text-base">{profile.name}</strong>

					<div className="space-y-2">
						<div className="flex flex-col">
							<span className="text-xs">Identificador</span>
							<span className="text-muted-foreground font-mono text-xs">
								{profile.id}
							</span>
						</div>
						<div className="flex flex-col">
							<span className="text-xs">E-mail</span>
							<span className="text-muted-foreground text-xs">
								{profile.email}
							</span>
						</div>
						{profile.company && (
							<div className="flex flex-col">
								<span className="text-xs">Empresa</span>
								<span className="text-muted-foreground text-xs">
									{profile.company}
								</span>
							</div>
						)}
					</div>
				</DropdownMenuLabel>

				<DropdownMenuSeparator />
				<DropdownMenuItem variant="destructive">
					<LogOutIcon />
					Sair
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
