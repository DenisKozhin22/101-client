import { IDevice } from '@/services/Device/device.types'
import { FavoritesService } from '@/services/Favorites/favorites.service'
import { useMutation } from 'react-query'
import { useActions } from '../useActions'

export const useAddToFavorites = (device: IDevice) => {
	const { addToFavorites } = useActions()
	return useMutation(
		['add to favorites'],
		() => FavoritesService.addToFavorites({ productId: device._id }),
		{
			onSuccess: data => {
				if (data?.data.success) addToFavorites(device)
			},
		},
	)
}
