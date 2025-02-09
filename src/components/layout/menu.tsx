'use client'

import { Link } from 'next-view-transitions'
import { cn } from '@/lib/utils'

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger
} from '@/components/ui/navigation-menu'

interface Links {
	title: string
	href: string
	active: boolean
}
interface NavBarProps {
	links: Links[]
}

export function Menu({ links }: NavBarProps) {
	return (
		<>
			<div className={cn(`menu-web`)}>
				<NavigationMenu>
					<NavigationMenuList className={cn(`flex gap-2`)}>
						{links.map((item, i) => (
							<NavigationMenuItem key={i}>
								<Link
									href={item.href}
									className={cn(
										`bg-transparent border-2 border-primary text-sm xl:text-base text-primary rounded-md p-1 hover:bg-primary hover:text-white`,
										item.active && `bg-primary text-white`
									)}
								>
									{item.title}
								</Link>
							</NavigationMenuItem>
						))}

						{/* Posible uso de sub-menú */}
						{/* <NavigationMenuItem>
							<NavigationMenuTrigger>
								Celosías de metal
							</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul
									className={cn(
										`w-max bg-black !bg-opacity-80 p-4 grid gap-4`
									)}
								>
									{links.map((item, i) => (
										<li key={i}>
											<Link
												href={item.href}
												className={cn(
													`block w-full text-center`
												)}
											>
												{item.title}
											</Link>
										</li>
									))}
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem> */}
					</NavigationMenuList>
				</NavigationMenu>
			</div>
		</>
	)
}
