import Image from 'next/image'

import { cn } from '@/lib/utils'
import { Link } from 'next-view-transitions'

import { Menu } from '@/components/layout/menu'
import { MenuMovil } from './menu-movil'

const links: { title: string; href: string }[] = [
	{
		title: 'Puertas, portones y rejas',
		href: '/puertas-portones-rejas-celosias-de-metal-metalicas'
	},
	{
		title: 'Bardas y muros',
		href: '/bardas-muros-celosias-de-metal-metalicas'
	},
	{
		title: 'Pérgolas, terrazas y techos',
		href: '/pergolas-terrazas-techos-celosias-de-metal-metalicas'
	},
	{
		title: 'Barandales y balcones',
		href: '/barandales-balcones-celosias-de-metal-metalicas'
	},
	{
		title: 'Mamparas, biombos y divisores',
		href: '/mamparas-biombos-divisores-celosias-de-metal-metalicas'
	},
	{
		title: 'Diseños y proyectos especiales',
		href: '/disenos-especiales-proyectos-fabricacion-a-medida-celosias-de-metal-metalicas'
	}
]

export default function NavBar() {
	return (
		<div className={cn('fixed top-0 left-0 w-full bg-black bg-opacity-80')}>
			<div
				className={cn(
					'container mx-auto min-h-14 max-h-14 flex items-center justify-between gap-4 px-4 py-2'
				)}
			>
				<div>
					<Link href={`/`}>
						<Image
							src={`/admx.png`}
							alt="arteDigitalMX"
							height={38}
							width={52}
							className={cn(``)}
						/>
					</Link>
				</div>

				<div className={cn(`hidden md:block`)}>
					<Menu links={links} />
				</div>

				<div className={cn(`block md:hidden`)}>
					<MenuMovil links={links} />
				</div>
			</div>
		</div>
	)
}
