import { MongooseUsersRepository } from '@/infra/mongoose/repositories/mongoose-users-repository'
import { AuthenticateUseCase } from '../authenticate'

export function makeAuthenticateUseCase() {
	const mongooseUsersRepository = new MongooseUsersRepository()
	const authenticateUseCase = new AuthenticateUseCase(mongooseUsersRepository)

	return authenticateUseCase
}
