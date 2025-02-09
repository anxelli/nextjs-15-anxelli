'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'

import { cn } from '@/lib/utils'
import { Link } from 'next-view-transitions'

import { Menu } from '@/components/layout/menu'
import { MenuMovil } from './menu-movil'

interface Links {
	title: string
	href: string
	active: boolean
}
interface NavBarProps {
	links: Links[]
}

export default function NavBar({ links }: NavBarProps) {
	// Get the current pathname
	const pathname = usePathname()

	// Mappping the links and adding the active property to the current pathname
	const updatedLinks = links.map(link => ({
		...link,
		active: pathname === link.href
	}))

	return (
		<nav className={cn(`sticky top-0 w-full bg-white shadow z-50`)}>
			<div
				className={cn(
					'container mx-auto min-h-14 max-h-14 flex items-center justify-between gap-4 px-4 py-2'
				)}
			>
				<div>
					<Link href={`/`}>
						<h1 className={cn(`font-medium text-xl`)}>
							Manu Perú Amazon
						</h1>
					</Link>
				</div>

				<div className={cn(`hidden lg:block`)}>
					<Menu links={updatedLinks} />
				</div>

				<div className={cn(`block lg:hidden`)}>
					<MenuMovil links={updatedLinks} />
				</div>
			</div>
		</nav>
	)
}
