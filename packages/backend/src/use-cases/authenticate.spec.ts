import { User } from '@/domain/entities/user'
import { InMemoryUsersRepository } from '@/tests/repositories/in-memory-users-repository'
import { AuthenticateUseCase } from './authenticate'

let usersRepository: InMemoryUsersRepository
let sut: AuthenticateUseCase

describe('Authenticate', () => {
	beforeEach(() => {
		usersRepository = new InMemoryUsersRepository()
		sut = new AuthenticateUseCase(usersRepository)
	})

	it('should be able to authenticate', async () => {
		const email = 'john.doe@example.com'
		const plainPassword = '123456'

		const user = new User({
			name: 'John Doe',
			email,
			password: plainPassword,
		})

		usersRepository.items.push(user)

		const result = await sut.execute(email, plainPassword)

		expect(result.user.id).toEqual(user.id)
	})

	it('should not be able to authenticate with a non-existing user', async () => {
		await expect(() =>
			sut.execute('non-existent-user@example.com', 'password-test'),
		).rejects.toThrow('Invalid credentials')
	})

	it('should not be able to authenticate with a wrong password', async () => {
		const email = 'john.doe@example.com'

		const user = new User({
			name: 'John Doe',
			email,
			password: '123456',
		})

		usersRepository.items.push(user)

		await expect(() => sut.execute(email, 'wrong-password')).rejects.toThrow(
			'Invalid credentials',
		)
	})
})
