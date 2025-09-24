import type { User } from '@/domain/entities/user'

export class GetProfileUseCase {
	async execute(userId: string): Promise<User> {
		throw new Error('Not implemented')
	}
}
