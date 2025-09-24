import { User } from '@/domain/entities/user'
import { InMemoryUsersRepository } from '@/tests/repositories/in-memory-users-repository'
import { GetProfileUseCase } from './get-profile'

let usersRepository: InMemoryUsersRepository
let sut: GetProfileUseCase

describe('Get Profile', () => {
	beforeEach(() => {
		usersRepository = new InMemoryUsersRepository()
		sut = new GetProfileUseCase()
	})

	it('should be able to get authenticated user profile', async () => {
		usersRepository.items.push(
			new User({
				id: 'user-test-id',
				name: 'John',
				email: 'john.doe@example.com',
				company: 'Test Inc',
				password: '123456',
			}),
		)

		const { user } = await sut.execute('user-test-id')

		expect(user).toEqual({
			id: 'user-test-id',
			name: 'John',
			email: 'john.doe@example.com',
			company: 'Test Inc',
		})
	})
})
