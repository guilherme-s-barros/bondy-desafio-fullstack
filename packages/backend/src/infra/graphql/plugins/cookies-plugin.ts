import type { ApolloServerPlugin, GraphQLRequestContext } from '@apollo/server'

export interface CookiesContext {
	cookies: Record<string, string>
}

function parseCookies(cookieHeader?: string): Record<string, string> {
	if (!cookieHeader) {
		return {}
	}

	return cookieHeader
		.split(';')
		.map((cookie) => cookie.trim().split('='))
		.reduce((acc, [key, value]) => {
			if (key && value) {
				acc[key] = decodeURIComponent(value)
			}

			return acc
		}, {})
}

export const cookiesPlugin: ApolloServerPlugin<CookiesContext> = {
	async requestDidStart() {
		return {
			async didResolveOperation(
				requestContext: GraphQLRequestContext<CookiesContext>,
			) {
				const { contextValue, request } = requestContext
				const cookieHeader =
					request.http.headers.get('cookie') ||
					request.http.headers.get('Cookie')

				contextValue.cookies = parseCookies(cookieHeader)
			},
		}
	},
}
