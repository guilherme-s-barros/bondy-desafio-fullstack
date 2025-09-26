import { ChevronDownIcon, LogOutIcon } from 'lucide-react'

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
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline">
					John Doe
					<ChevronDownIcon />
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent align="end">
				<DropdownMenuLabel className="flex flex-col gap-2">
					<strong className="text-base">John Doe</strong>

					<div className="space-y-2">
						<div className="flex flex-col">
							<span className="text-xs">Identificador</span>
							<span className="text-muted-foreground font-mono text-xs">
								sdflksjeklfjskldjfkls
							</span>
						</div>
						<div className="flex flex-col">
							<span className="text-xs">E-mail</span>
							<span className="text-muted-foreground text-xs">
								john.doe@example.com
							</span>
						</div>
						<div className="flex flex-col">
							<span className="text-xs">Empresa</span>
							<span className="text-muted-foreground text-xs">Test Inc</span>
						</div>
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
