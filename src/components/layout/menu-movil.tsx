'use client'

import { useState } from 'react'

import { cn } from '@/lib/utils'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '@/components/ui/sheet'

import { Ellipsis, Menu } from 'lucide-react'

export function MenuMovil({
	links
}: {
	links: { title: string; href: string }[]
}) {
	const [isOpen, setIsOpen] = useState(false)

	const closeSheet = () => {
		setIsOpen(false)
	}

	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger asChild>
				<Button variant="default" onClick={() => setIsOpen(true)}>
					<Menu />
				</Button>
			</SheetTrigger>
			<SheetContent
				side="left"
				className={cn(
					`flex flex-col items-start justify-between gap-4 p-4 bg-foreground text-background`
				)}
			>
				<SheetHeader>
					<SheetTitle
						className={cn(
							`w-full flex items-center justify-between gap-4`
						)}
					>
						<Link href={`/`} onClick={closeSheet}>
							LOGO
						</Link>
					</SheetTitle>

					<SheetDescription></SheetDescription>
				</SheetHeader>

				<div className="w-full">
					<ul className={cn(`w-max grid gap-2`)}>
						<li>
							<Link
								href={`/`}
								className={cn(
									`block w-full px-2 py-1 text-sm text-primary border border-primary rounded-md active:text-accent active:border-accent`
								)}
								onClick={closeSheet}
							>
								Inicio
							</Link>
						</li>
						{links.map((item, i) => (
							<li key={i}>
								<Link
									href={item.href}
									className={cn(
										`block w-full p-1 ml-2 text-sm text-primary border border-primary rounded-md active:text-accent active:border-accent`
									)}
									onClick={closeSheet}
								>
									{item.title}
								</Link>
							</li>
						))}
					</ul>
				</div>

				<SheetFooter className={cn(`mt-auto`)}>Footer</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}
