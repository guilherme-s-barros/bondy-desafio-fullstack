import { authenticate, AuthenticateArgs } from './authenticate'

export default {
  authenticate: (_: never, args: AuthenticateArgs) => authenticate(args),
}
