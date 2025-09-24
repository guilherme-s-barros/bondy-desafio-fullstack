import gql from 'graphql-tag'

export default gql`
  type Query {
    getProfile: User!
  }
`
