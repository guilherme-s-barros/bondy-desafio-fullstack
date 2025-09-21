import { User } from '@/domain/entities/user'
import { UserModel } from '../models/User'

export class UserMapper {
  static toDomain(user: InstanceType<typeof UserModel>): User {
    return new User(
      {
        id: user.id,
        name: user.name,
        email: user.email,
        company: user.company,
        password: user.password,
      },
      false
    )
  }
}
