import { Optional } from '@/helpers/optional'
import * as bcrypt from 'bcrypt'
import { randomUUID } from 'node:crypto'

export interface UserProps {
  id: string
  name: string
  email: string
  company?: string | null
  password: string
}

export class User {
  private readonly userProps: UserProps

  constructor(userProps: Optional<UserProps, 'id'>, hashPassword = true) {
    this.userProps = {
      ...userProps,
      id: userProps.id ?? randomUUID(),
      password: hashPassword
        ? bcrypt.hashSync(userProps.password, 8)
        : userProps.password,
    }
  }

  public get id() {
    return this.userProps.id
  }

  public get name() {
    return this.userProps.name
  }

  public set name(value: string) {
    this.userProps.name = value
  }

  public get email() {
    return this.userProps.email
  }

  public set email(value: string) {
    this.userProps.email = value
  }

  public get company() {
    return this.userProps.company
  }

  public set company(value: string | null) {
    this.userProps.company = value
  }

  public get password() {
    return this.userProps.password
  }

  public set password(value: string) {
    this.userProps.password = bcrypt.hashSync(value, 8)
  }

  public async comparePassword(candidate: string) {
    return await bcrypt.compare(candidate, this.password)
  }
}
