import { Link } from 'next-view-transitions'

import { cn } from '@/lib/utils'

export default function NotFound() {
	return (
		<>
			<section
				className={cn(`w-full py-16 md:py-72 bg-black text-white`)}
			>
				<div
					className={cn(
						`container mx-auto flex flex-col items-center justify-center`
					)}
				>
					<div
						className={cn(
							`w-full flex flex-col items-center justify-center gap-6`
						)}
					>
						<h2
							className={cn(
								`font-bold text-4xl m-0 p-0 leading-3`
							)}
						>
							404
						</h2>
						<h4
							className={cn(
								`font-sans uppercase text-2xl mx-2 leading-3`
							)}
						>
							Sección en construcción
						</h4>
					</div>

					<div className={cn(`my-8`)}>
						<p className={cn(`font-light text-sm text-center`)}>
							Disculpa las molestias, estamos trabajando en esta
							sección. Por favor, regresa más tarde.
						</p>
					</div>

					<Link
						href="/"
						className={cn(
							`font-medium uppercase bg-primary text-background hover:bg-secondary hover:text-background px-4 py-2 rounded-md`
						)}
					>
						Regresar al inicio
					</Link>
				</div>
			</section>
		</>
	)
}
