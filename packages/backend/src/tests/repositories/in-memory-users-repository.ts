import type { User } from '@/domain/entities/user'
import type { UsersRepository } from '@/domain/repositories/users-repository'

export class InMemoryUsersRepository implements UsersRepository {
	public items: User[] = []

	public async findByEmail(email: string) {
		const user = this.items.find((item) => item.email === email)

		if (!user) {
			return null
		}

		return user
	}

	async findById(userId: string) {
		const user = this.items.find((item) => item.id === userId)

		if (!user) {
			return null
		}

		return user
	}
}
