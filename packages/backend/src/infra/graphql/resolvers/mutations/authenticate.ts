import { generateToken } from '@/infra/auth/jwt'
import { makeAuthenticateUseCase } from '@/use-cases/factories/make-authenticate-use-case'

import type { GraphQLContext } from '../../types/context'

export interface AuthenticateArgs {
	email: string
	password: string
}

export async function authenticate(
	args: AuthenticateArgs,
	context: GraphQLContext,
) {
	const { email, password } = args

	try {
		const useCase = makeAuthenticateUseCase()

		const { user } = await useCase.execute(email, password)
		const token = generateToken(user.id)

		const expiration = 86400 * 7 // 7 days
		const cookieString = `auth=${token}; HttpOnly; Path=/; Max-Age=${expiration};`

		context.setHeaders.push({
			key: 'Set-Cookie',
			value: cookieString,
		})

		return user
	} catch (error) {
		throw new Error(`Authentication failed: ${error}`)
	}
}
