import { UsersRepository } from '@/domain/repositories/users-repository'

export class AuthenticateUseCase {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute(email: string, password: string) {
    const user = await this.usersRepository.findByEmail(email)

    if (!user) {
      throw new Error('Invalid credentials')
    }

    const doesPasswordMatch = await user.comparePassword(password)

    if (!doesPasswordMatch) {
      throw new Error('Invalid credentials')
    }

    return {
      user,
    }
  }
}
