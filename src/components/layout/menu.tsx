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

export function Menu({ links }: { links: { title: string; href: string }[] }) {
	return (
		<>
			<div className={cn(`menu-web`)}>
				<NavigationMenu>
					<NavigationMenuList className={cn(`flex gap-4`)}>
						<NavigationMenuItem>
							<Link href="/">Inicio</Link>
						</NavigationMenuItem>
						<NavigationMenuItem>
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
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link href="/nosotros">Nosotros</Link>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link href="/envios-e-instalaciones">
								Envíos e instalaciones
							</Link>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link href="/contacto">Contacto</Link>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</div>
		</>
	)
}
