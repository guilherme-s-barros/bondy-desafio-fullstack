import gql from 'graphql-tag'

export default gql`
  type User {
    id: ID!
    name: String!
    email: String!
    company: String
  }

  type Mutation {
    authenticate(email: String!, password: String!): User!
  }
`
