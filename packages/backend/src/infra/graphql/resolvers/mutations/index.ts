import { type AuthenticateArgs, authenticate } from './authenticate'

export default {
	authenticate: (_: never, args: AuthenticateArgs) => authenticate(args),
}
