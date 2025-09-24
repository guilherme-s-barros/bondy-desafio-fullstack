import { MongooseUsersRepository } from '@/infra/mongoose/repositories/mongoose-users-repository'
import { GetProfileUseCase } from '../get-profile'

export function makeGetProfileUseCase() {
	const mongooseUsersRepository = new MongooseUsersRepository()
	const getProfileUseCase = new GetProfileUseCase(mongooseUsersRepository)

	return getProfileUseCase
}
