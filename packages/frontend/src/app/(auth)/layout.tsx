import { ThemeImage } from '@/components/theme-image'

export default function Layout({ children }: React.PropsWithChildren) {
	return (
		<div className="flex h-screen bg-[url('/bg.png')] dark:bg-[url('/bg-dark.png')]">
			<div className="flex flex-1 items-center justify-center">
				<ThemeImage
					srcLight="/logo.svg"
					srcDark="/logo-dark.svg"
					alt="Bondy Logo"
					height={192}
					width={390}
					unoptimized
				/>
			</div>

			<div className="w-[624px] bg-muted">{children}</div>
		</div>
	)
}
