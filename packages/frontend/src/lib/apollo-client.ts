import { HttpLink } from '@apollo/client'
import {
	ApolloClient,
	InMemoryCache,
	registerApolloClient,
} from '@apollo/client-integration-nextjs'
import { cookies } from 'next/headers'

export const { getClient } = registerApolloClient(async () => {
	const cookiesStore = await cookies()
	const cookieHeader = cookiesStore.toString()

	return new ApolloClient({
		cache: new InMemoryCache(),
		link: new HttpLink({
			uri: 'http://localhost:3000/local/desafio',
			headers: {
				Cookie: cookieHeader,
			},
		}),
	})
})
