import { getProfile } from './get-profile'

import type { GraphQLContext } from '../../types/context'

export default {
	getProfile: (_: never, __: never, context: GraphQLContext) =>
		getProfile(context),
}
