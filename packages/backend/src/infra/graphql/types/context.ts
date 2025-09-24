import type {
	APIGatewayProxyEvent,
	APIGatewayProxyEventHeaders,
	Context,
} from 'aws-lambda'

import type { CookiesContext } from '../plugins/cookies-plugin'
import type { SetHeadersContext } from '../plugins/set-headers-plugin'

export interface GraphQLContext extends SetHeadersContext, CookiesContext {
	headers: APIGatewayProxyEventHeaders
	functionName: string
	event: APIGatewayProxyEvent
	context: Context
}
