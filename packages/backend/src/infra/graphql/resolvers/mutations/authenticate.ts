import { generateToken } from '@/infra/auth/jwt'
import { makeAuthenticateUseCase } from '@/use-cases/factories/make-authenticate-use-case'

import type { SetHeadersContext } from '../../plugins/set-headers-plugin'

export interface AuthenticateArgs {
	email: string
	password: string
}

export async function authenticate(
	args: AuthenticateArgs,
	context: SetHeadersContext,
) {
	const { email, password } = args

	try {
		const useCase = makeAuthenticateUseCase()

		const { user } = await useCase.execute(email, password)
		const token = generateToken(user.id)

		const cookieString = `auth=${token}; HttpOnly; Path=/; Max-Age=3600; SameSite=None; Secure`

		context.setHeaders.push({
			key: 'Set-Cookie',
			value: cookieString,
		})

		return user
	} catch (error) {
		throw new Error(`Authentication failed: ${error}`)
	}
}
