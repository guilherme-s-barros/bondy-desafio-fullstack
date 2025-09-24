import type { User } from '../entities/user'

export interface UsersRepository {
	findById(userId: string): Promise<User | null>
	findByEmail(email: string): Promise<User | null>
}
