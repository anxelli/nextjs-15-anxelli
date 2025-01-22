import { Metadata } from 'next'
import Script from 'next/script'
import { WithContext, WebPage } from 'schema-dts'

import { cn } from '@/lib/utils'

//! Metadata
export const metadata: Metadata = {
	title: 'NextJS 15 | Anxelli Template',
	description:
		'Plantilla de NextJS 15 para proyectos iniciales, por @anxelli',
	keywords: 'palabras, clave, etc',
	metadataBase: new URL('https://github.com/anxelli/'),
	openGraph: {
		title: 'NextJS 15 | Anxelli Template',
		description:
			'Plantilla de NextJS 15 para proyectos iniciales, por @anxelli',
		url: 'https://github.com/anxelli/',
		images: [
			{
				url: '/img/admx.png',
				width: 1200,
				height: 675,
				alt: 'Anxelli'
			}
		],
		siteName: 'Anxelli',
		locale: 'es_MX',
		type: 'website'
	},
	twitter: {
		card: 'summary_large_image',
		title: 'NextJS 15 | Anxelli Template',
		description:
			'Plantilla de NextJS 15 para proyectos iniciales, por @anxelli',
		images: ['https://github.com/anxelli/img/admx.png']
	}
}

export default async function Page({
	params
}: {
	params: Promise<{ slug: string }>
}) {
	//! Schema + Json-LD
	const webpageSchema: WithContext<WebPage> = {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		'@id': 'https://github.com/anxelli/',
		url: 'https://github.com/anxelli/',
		name: 'NextJS 15 | Anxelli Template',
		description:
			'Plantilla de NextJS 15 para proyectos iniciales, por @anxelli',
		inLanguage: 'es',
		isPartOf: { '@id': 'https://github.com/anxelli/#website' },
		publisher: { '@id': 'https://github.com/anxelli/#organization' },
		image: {
			'@type': 'ImageObject',
			url: 'https://github.com/anxelli/img/admx.png'
		}
	}

	const slug = (await params).slug
	console.log({ slug })

	return (
		<>
			<Script
				id="webpage-ld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(webpageSchema)
				}}
			/>

			<div className={cn(``)}>
				<h1>
					Page 1 -{' '}
					<big>
						<strong>{slug}</strong>
					</big>
				</h1>

				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Dolor, reiciendis? Odio vel dolorum, et quo non nostrum quam
					pariatur magni, tempora repudiandae ducimus magnam sit enim
					iure numquam autem libero!
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Nisi reiciendis consectetur, fugit velit vero officia
					tempora labore nobis corporis, nam quae enim! Temporibus
					perspiciatis sint, excepturi illum in hic, vel minima
					consequatur iure veniam, laudantium eaque modi autem! Rerum
					nisi doloribus saepe porro quis tempore architecto culpa
					ipsum, magnam similique, dolores neque, suscipit vitae
					tempora reiciendis obcaecati maxime? Ipsa consectetur ut rem
					temporibus odit veniam, quod, excepturi consequatur eveniet
					ratione debitis fugit qui distinctio dolorum repellendus,
					deleniti illo aperiam eum voluptates itaque maiores? Est
					laudantium eligendi inventore natus vitae debitis
					dignissimos quae perspiciatis temporibus repellendus
					voluptates porro aspernatur exercitationem laborum, dolorem
					itaque iste atque corrupti. Ea doloremque earum veniam nobis
					obcaecati provident, minima quam labore. Accusantium esse,
					quam magni porro doloremque cum fuga officia placeat
					eligendi ipsa, quia aliquid necessitatibus? Modi velit nobis
					dolor laborum veritatis corrupti natus doloremque ipsum,
					delectus magni laudantium ipsa explicabo accusantium,
					ratione fugiat enim. Velit quam et ducimus doloribus
					nostrum, sint cupiditate quibusdam enim maiores commodi
					tempore, earum blanditiis est sapiente temporibus quos
					eligendi ex provident officia repellat iste ab explicabo!
					Odit esse nemo, nesciunt quasi autem ducimus earum totam
					quis doloremque. Ab molestiae maxime quas illum autem?
					Veniam ex quisquam ipsam magnam commodi quae molestiae
					architecto! Sit labore saepe adipisci explicabo repudiandae,
					pariatur fugit! Dolores libero alias, dolor sint soluta
					aperiam sunt eum porro quam fugiat autem atque nostrum rerum
					facere magni! Est officia corrupti doloremque iusto. Non
					cumque tenetur corporis similique, culpa aliquid ullam
					numquam repellendus dicta hic libero error expedita, dolorum
					doloremque autem quia nulla impedit ratione exercitationem
					quibusdam debitis repellat in atque consequuntur. Doloremque
					vitae enim aut voluptas rem explicabo exercitationem
					molestiae quisquam, nesciunt a modi fugiat blanditiis
					dolores amet eius aspernatur accusamus incidunt doloribus,
					officia quis? Adipisci, iure? Itaque quas voluptatum minus
					voluptas optio beatae et voluptatibus dolore, libero magnam?
				</p>
			</div>
		</>
	)
}
