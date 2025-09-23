import { type AuthenticateArgs, authenticate } from './authenticate'

import type { SetHeadersContext } from '../../plugins/set-headers-plugin'

export default {
	authenticate: (
		_: never,
		args: AuthenticateArgs,
		context: SetHeadersContext,
	) => authenticate(args, context),
}
