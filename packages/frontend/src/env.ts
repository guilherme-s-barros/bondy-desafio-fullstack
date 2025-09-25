import z from 'zod'

const envSchema = z.object({
	NEXT_PUBLIC_GRAPHQL_ENDPOINT: z.url(),
})

export const env = envSchema.parse({
	NEXT_PUBLIC_GRAPHQL_ENDPOINT: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
})
