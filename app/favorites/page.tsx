import Favorites from '@/components/Favorites/Favorites'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Favorites',
}

export default function FavoritesPage() {
	return (
		<>
			<Favorites />
		</>
	)
}
