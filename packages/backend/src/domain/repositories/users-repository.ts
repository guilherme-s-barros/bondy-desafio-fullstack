import type { User } from '../entities/user'

export interface UsersRepository {
	findByEmail(email: string): Promise<User | null>
}
