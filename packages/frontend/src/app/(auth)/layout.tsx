import { ThemeImage } from '@/components/theme-image'

export default function Layout({ children }: React.PropsWithChildren) {
	return (
		<div className="flex h-screen bg-[url('/bg.png')] dark:bg-[url('/bg-dark.png')]">
			<div className="max-md:hidden flex flex-1 items-center justify-center">
				<ThemeImage
					srcLight="/logo.svg"
					srcDark="/logo-dark.svg"
					alt="Bondy Logo"
					height={192}
					width={390}
					style={{ minWidth: 390 }}
					unoptimized
				/>
			</div>

			<div className="w-full max-w-[624px] max-md:max-w-full bg-muted">
				{children}
			</div>
		</div>
	)
}
