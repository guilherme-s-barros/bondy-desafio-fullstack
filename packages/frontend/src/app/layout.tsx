import { Geist, Geist_Mono } from 'next/font/google'

import type { Metadata } from 'next'

import { ApolloWrapper } from '@/components/apollo-wrapper'

import './globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: {
		template: '%s | Bondy Application',
		default: 'Bondy Application',
	},
	description:
		'Front-end do desafio Full-Stack da Bondy. Feito com Next.js, Tailwind CSS e Shadcn UI.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<ApolloWrapper>{children}</ApolloWrapper>
			</body>
		</html>
	)
}
