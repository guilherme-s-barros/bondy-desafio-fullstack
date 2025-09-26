import { ProfileMenu } from './profile-menu'
import { ThemeToggle } from './theme/toggle'
import { ThemeImage } from './theme-image'

export function Header() {
	return (
		<header className="flex items-center justify-between px-16 py-2 border-b">
			<ThemeImage
				srcLight="/logo.svg"
				srcDark="/logo-dark.svg"
				alt="Bondy logo"
				height={56}
				width={114}
				unoptimized
			/>

			<div className="flex items-center gap-2">
				<ThemeToggle />
				<ProfileMenu />
			</div>
		</header>
	)
}
