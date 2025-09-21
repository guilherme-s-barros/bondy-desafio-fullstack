import { User } from '@/domain/entities/user'
import { UsersRepository } from '@/domain/repositories/users-repository'
import { UserModel } from '../models/User'
import { UserMapper } from '../mappers/user-mapper'

export class MongooseUsersRepository implements UsersRepository {
  async findByEmail(email: string): Promise<User | null> {
    const userModel = await UserModel.findOne({ email })

    if (!userModel) {
      return null
    }

    return UserMapper.toDomain(userModel)
  }
}
