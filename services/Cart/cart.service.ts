import { instance } from '@/api'
import { AxiosResponse } from 'axios'
import { IChangeQuantity, IProduct, ICartProps, ICartResponse } from './cart.types'

export const CartService = {
	async getCart(): Promise<AxiosResponse<IProduct[]>> {
		return instance.get<IProduct[]>('cart/get-cart-user')
	},
	async addToCart({ productId }: ICartProps): Promise<AxiosResponse<ICartResponse>> {
		return instance.post<ICartResponse>('cart/add-to-cart', { productId })
	},
	async removeFromCart({productId}: ICartProps): Promise<AxiosResponse<ICartResponse>> {
		return instance.post<ICartResponse>('cart/remove-from-cart', { productId })
	},
	async changeQuantity({ productId, quantity }: IChangeQuantity) {
		return instance.post<IChangeQuantity>('cart/toggle-quantity-product-from-cart', {
			productId,
			quantity,
		})
	},
}
