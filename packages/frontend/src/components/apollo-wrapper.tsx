'use client'

import { HttpLink } from '@apollo/client'
import {
	ApolloClient,
	ApolloNextAppProvider,
	InMemoryCache,
} from '@apollo/client-integration-nextjs'

function makeClient() {
	const httpLink = new HttpLink({
		uri: 'http://localhost:3000/local/desafio',
	})

	return new ApolloClient({
		cache: new InMemoryCache(),
		link: httpLink,
	})
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
	return (
		<ApolloNextAppProvider makeClient={makeClient}>
			{children}
		</ApolloNextAppProvider>
	)
}
