import Link from 'next/link'
import { cn } from '@/lib/utils'
import { AiOutlineSwapRight } from 'react-icons/ai'

export default function CTA({
	link,
	style,
	className,
	children,
}: Sanity.CTA & React.HTMLAttributes<HTMLAnchorElement>) {
	if (!link?.type) return null

	const isArrow = style === 'action-arrow'

	const props = {
		className: cn(style, isArrow && 'group', className),
		children: [
			children || link.label || link.internal?.title,
			isArrow && (
				<AiOutlineSwapRight
					className="text-xl transition-transform group-hover:translate-x-1"
					key=""
				/>
			),
		].filter(Boolean),
	}

	switch (link.type) {
		case 'internal':
			const slug = link.internal?.metadata?.slug?.current
			const parent = link.internal?._type === 'blog.post' ? 'blog' : null
			const path = slug === 'index' ? '' : slug
			const href = '/' + [parent, path].filter(Boolean).join('/')

			return <Link href={href} {...props} />

		case 'external':
			return <a href={link.external} {...props} />

		default:
			return null
	}
}
