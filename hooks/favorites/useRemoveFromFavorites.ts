import { IDevice } from '@/services/Device/device.types'
import { FavoritesService } from '@/services/Favorites/favorites.service'
import { useMutation } from 'react-query'
import { useActions } from '../useActions'

export const useRemoveFromFavorites = (device: IDevice) => {
	const { removeFromFavorites } = useActions()
	return useMutation(
		['remove from favorites'],
		() => FavoritesService.removeFromFavorites({ productId: device._id }),
		{
			onSuccess: data => {
				if (data?.data.success) removeFromFavorites(device)
			},
		},
	)
}
