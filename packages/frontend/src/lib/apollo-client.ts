import { HttpLink } from '@apollo/client'
import {
	ApolloClient,
	InMemoryCache,
	registerApolloClient,
} from '@apollo/client-integration-nextjs'
import { cookies } from 'next/headers'

import { env } from '@/env'

export const { getClient } = registerApolloClient(async () => {
	const cookiesStore = await cookies()
	const cookieHeader = cookiesStore.toString()

	return new ApolloClient({
		cache: new InMemoryCache(),
		link: new HttpLink({
			uri: env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
			headers: {
				Cookie: cookieHeader,
			},
		}),
	})
})
