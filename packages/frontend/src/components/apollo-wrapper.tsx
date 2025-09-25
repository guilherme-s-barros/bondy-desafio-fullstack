'use client'

import { HttpLink } from '@apollo/client'
import {
	ApolloClient,
	ApolloNextAppProvider,
	InMemoryCache,
} from '@apollo/client-integration-nextjs'

import { env } from '@/env'

function makeClient() {
	const httpLink = new HttpLink({
		uri: env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
		credentials: 'include',
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
