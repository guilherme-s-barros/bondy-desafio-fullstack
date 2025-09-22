import { generateToken } from '@/infra/auth/jwt'
import { makeAuthenticateUseCase } from '@/use-cases/factories/make-authenticate-use-case'

export interface AuthenticateArgs {
	email: string
	password: string
}

export async function authenticate(args: AuthenticateArgs) {
	const { email, password } = args

	try {
		const useCase = makeAuthenticateUseCase()

		const { user } = await useCase.execute(email, password)
		const token = generateToken(user.id)

		return {
			token,
			user,
		}
	} catch (error) {
		throw new Error(`Authentication failed: ${error}`)
	}
}
