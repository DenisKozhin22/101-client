import { instance } from '@/api'
import { IFavoritesProps, IFavoritesRes } from './favorites.types'
import { AxiosResponse } from 'axios'
import { IDevice } from '../Device/device.types'

export const FavoritesService = {
	async getFavorites(): Promise<AxiosResponse<IDevice[]>> {
		return instance.get<IDevice[]>('/favorites')
	},
	async addToFavorites({ productId }: IFavoritesProps): Promise<AxiosResponse<IFavoritesRes>> {
		return instance.post<IFavoritesRes>('/favorites/add-to-favorites', { productId })
	},
	async removeFromFavorites({ productId }: IFavoritesProps): Promise<AxiosResponse<IFavoritesRes>> {
		return instance.post<IFavoritesRes>('/favorites/remove-from-favorites', { productId })
	},
}
