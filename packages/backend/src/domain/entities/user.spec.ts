import { User } from './user'

describe('User', () => {
  it('should hash user password', async () => {
    const plainPassword = '123456'

    const user = new User({
      name: 'John',
      email: 'john.doe@example.com',
      password: plainPassword,
      company: 'Test Inc',
    })

    expect(user.password).not.toBe(plainPassword)

    const passwordMatches = await user.comparePassword('123456')
    expect(passwordMatches).toBe(true)
  })
})
