'use client'
import { Metadata } from 'next'
import './globals.scss'
import { Roboto } from 'next/font/google'
import MainProvider from '@/providers/MainProvider'

// const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({ weight: ['400', '500', '700', '900'], subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Интернет-магазин 101',
	description: 'Интернет-магазин по продаже техники Apple',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={roboto.className}>
				<MainProvider>{children}</MainProvider>
			</body>
		</html>
	)
}
