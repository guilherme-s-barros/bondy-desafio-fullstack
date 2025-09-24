import { type AuthenticateArgs, authenticate } from './authenticate'

import type { GraphQLContext } from '../../types/context'

export default {
	authenticate: (_: never, args: AuthenticateArgs, context: GraphQLContext) =>
		authenticate(args, context),
}
