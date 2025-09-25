import Image, { type ImageProps } from 'next/image'

type ThemeImageProps = Omit<ImageProps, 'src' | 'priority' | 'loading'> & {
	srcLight: string
	srcDark: string
}

export function ThemeImage({ srcLight, srcDark, ...props }: ThemeImageProps) {
	return (
		<>
			<Image {...props} src={srcLight} className="dark:hidden" />
			<Image {...props} src={srcDark} className="hidden dark:block" />
		</>
	)
}
