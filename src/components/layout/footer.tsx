import { cn } from '@/lib/utils'

function getCurrentYear() {
	return new Date().getFullYear()
}

export default function Footer() {
	const year = getCurrentYear()

	return (
		<>
			<footer className={cn(`w-full bg-foreground text-background`)}>
				<div className={cn(`container mx-auto px-4 py-4`)}>
					<h6>
						&copy;{year} | <em>Github</em>/<strong>Anxelli</strong>
					</h6>
				</div>
			</footer>
		</>
	)
}
