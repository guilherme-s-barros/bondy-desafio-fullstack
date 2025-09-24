import { gql } from '@apollo/client'
import { redirect } from 'next/navigation'
import { use } from 'react'

import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { getClient } from '@/lib/apollo-client'

import type { GetProfileQuery } from '@/graphql/generated'

const GET_PROFILE = gql`
	query getProfile {
	  getProfile {
			id
      name
      email
      company
		}
	}
`

async function fetchProfile() {
	const client = await getClient()

	try {
		const { data } = await client.query<GetProfileQuery>({
			query: GET_PROFILE,
		})

		return data?.getProfile
	} catch {
		redirect('/sign-in')
	}
}

export default function Home() {
	const profile = use(fetchProfile())

	return (
		<main className="font-sans flex h-screen items-center justify-center">
			<div className="flex flex-col items-center gap-8 p-4">
				<h1 className="text-3xl font-bold tracking-tight">Bem-vindo!</h1>
				<h2 className="text-xl font-semibold tracking-tight">Meu perfil</h2>

				<Table>
					<TableBody>
						<TableRow>
							<TableCell>ID:</TableCell>
							<TableCell className="font-mono">{profile?.id}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Nome:</TableCell>
							<TableCell>{profile?.name}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>E-mail:</TableCell>
							<TableCell>{profile?.email}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Empresa:</TableCell>
							<TableCell>{profile?.company}</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</div>
		</main>
	)
}
