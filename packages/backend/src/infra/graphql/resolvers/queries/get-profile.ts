import { verifyToken } from '@/infra/auth/jwt'
import { makeGetProfileUseCase } from '@/use-cases/factories/make-get-profile-use-case'

import type { GraphQLContext } from '../../types/context'

export async function getProfile(context: GraphQLContext) {
	const { cookies } = context

	const authToken = cookies.auth

	try {
		if (!authToken) {
			throw new Error('Auth token not found')
		}

		const decoded = verifyToken(authToken) as { sub: string }

		if (!decoded || !decoded.sub) {
			throw new Error('Invalid token')
		}

		const useCase = makeGetProfileUseCase()

		const { user } = await useCase.execute(decoded.sub)

		return user
	} catch (error) {
		throw new Error(`Failed to get user profile: ${error}`)
	}
}
