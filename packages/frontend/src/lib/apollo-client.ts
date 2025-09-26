import { HttpLink } from '@apollo/client'
import {
	ApolloClient,
	InMemoryCache,
	registerApolloClient,
} from '@apollo/client-integration-nextjs'

import { env } from '@/env'

export function createApolloClient({
	...options
}: Omit<HttpLink.Options, 'uri'>) {
	return registerApolloClient(() => {
		return new ApolloClient({
			cache: new InMemoryCache(),
			link: new HttpLink({
				uri: env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
				...options,
			}),
		})
	})
}
