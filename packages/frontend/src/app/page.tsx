import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'

export default function Home() {
	return (
		<main className="font-sans flex h-screen items-center justify-center">
			<div className="flex flex-col items-center gap-8 p-4">
				<h1 className="text-3xl font-bold tracking-tight">Bem-vindo!</h1>
				<h2 className="text-xl font-semibold tracking-tight">Meu perfil</h2>

				<Table>
					<TableBody>
						<TableRow>
							<TableCell>ID:</TableCell>
							<TableCell className="font-mono">
								lkj4lk5j4lh5l6h5lkj5lk
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Nome:</TableCell>
							<TableCell>João</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>E-mail:</TableCell>
							<TableCell>john.doe@example.com</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Empresa:</TableCell>
							<TableCell>Test Inc</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</div>
		</main>
	)
}
