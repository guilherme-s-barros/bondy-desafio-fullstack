import type { ApolloServerPlugin, GraphQLRequestContext } from '@apollo/server'

export interface SetHeadersContext {
	setHeaders: Array<{ key: string; value: string }>
}

export const setHeadersPlugin: ApolloServerPlugin<SetHeadersContext> = {
	async requestDidStart() {
		return {
			async willSendResponse(
				requestContext: GraphQLRequestContext<SetHeadersContext>,
			) {
				const { contextValue, response } = requestContext
				const headers = contextValue.setHeaders || []

				if (headers && response.http) {
					headers.forEach(({ key, value }) => {
						response.http.headers.set(key, value)
					})
				}
			},
		}
	},
}
