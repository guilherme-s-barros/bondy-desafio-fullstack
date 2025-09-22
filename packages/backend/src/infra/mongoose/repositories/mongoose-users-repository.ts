import { UserMapper } from '../mappers/user-mapper'
import { UserModel } from '../models/User'

import type { User } from '@/domain/entities/user'
import type { UsersRepository } from '@/domain/repositories/users-repository'

export class MongooseUsersRepository implements UsersRepository {
	async findByEmail(email: string): Promise<User | null> {
		const userModel = await UserModel.findOne({ email })

		if (!userModel) {
			return null
		}

		return UserMapper.toDomain(userModel)
	}
}
