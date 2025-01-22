import './globals.css'
import Script from 'next/script'
import { WithContext, WebSite, Organization } from 'schema-dts'
import { GoogleTagManager } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import {
	Montserrat as FontSans,
	Audiowide as FontDisplay
} from 'next/font/google'
const fontSans = FontSans({
	subsets: ['latin'],
	weight: 'variable',
	variable: '--font-sans'
})
const fontDisplay = FontDisplay({
	subsets: ['latin'],
	weight: '400',
	variable: '--font-display'
})

import { cn } from '@/lib/utils'
import { ViewTransitions } from 'next-view-transitions'

import NavBar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	const organizationSchema: WithContext<Organization> = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		'@id': 'https://github.com/anxelli/#organization',
		name: 'Anxelli',
		url: 'https://github.com/anxelli',
		logo: {
			'@type': 'ImageObject',
			url: 'https://github.com/anxelli/img/favicon.png'
		},
		contactPoint: {
			'@type': 'ContactPoint',
			telephone: '+5215515849853',
			contactType: 'customer service'
		}
	}
	const websiteSchema: WithContext<WebSite> = {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		'@id': 'https://github.com/anxelli/#website',
		url: 'https://github.com/anxelli',
		name: 'Anxelli',
		publisher: { '@id': 'https://github.com/anxelli/#organization' }
	}

	return (
		<>
			<Script
				id="organization-ld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(organizationSchema)
				}}
			/>
			<Script
				id="website-ld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(websiteSchema)
				}}
			/>

			<ViewTransitions>
				<html lang="es-MX" suppressHydrationWarning={true}>
					{/* <GoogleTagManager gtmId="GTM-TTRCF5GM" /> */}

					<body
						className={cn(
							`${fontSans.variable} ${fontDisplay.variable} antialiased`
						)}
					>
						<NavBar />

						<div
							className={cn(
								`w-full pt-14 grid grid-rows-[1fr,auto] min-h-screen`
							)}
						>
							<main className={cn(`container mx-auto px-4`)}>
								{children}
							</main>

							<Footer />
						</div>

						<SpeedInsights />
						<Analytics />
					</body>
				</html>
			</ViewTransitions>
		</>
	)
}
