import type { UsersRepository } from '@/domain/repositories/users-repository'

export class GetProfileUseCase {
	constructor(private readonly usersRepository: UsersRepository) {}

	async execute(userId: string) {
		const user = await this.usersRepository.findById(userId)

		if (!user) {
			throw new Error('User not found')
		}

		return {
			user,
		}
	}
}
