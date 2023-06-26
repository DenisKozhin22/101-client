import { FavoritesService } from '@/services/Favorites/favorites.service'
import { useQuery } from 'react-query'
import { useActions } from '../useActions'

export const useGetFavorites = () => {
	const { setFavorites } = useActions()
	return useQuery(['get favorites'], () => FavoritesService.getFavorites(), {
		enabled: true,
		onSuccess: data => {
			setFavorites(data.data)
		},
	})
}
