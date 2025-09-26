import { gql } from '@apollo/client'
import { cookies } from 'next/headers'

import { createApolloClient } from '@/lib/apollo-client'

import type { GetProfileQuery } from '@/graphql/generated'

const GET_PROFILE = gql`
  query getProfile {
    getProfile {
      id
      name
      email
      company
    }
  }
`

export async function getProfile() {
	const cookiesStore = await cookies()
	const cookieHeader = cookiesStore.toString()

	if (!cookieHeader) {
		return null
	}

	const client = createApolloClient({
		headers: {
			Cookie: cookieHeader,
		},
	})

	try {
		const { data } = await client.query<GetProfileQuery>({
			query: GET_PROFILE,
		})

		return data?.getProfile
	} catch {
		return null
	}
}
