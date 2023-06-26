import { CartService } from '@/services/Cart/cart.service'
import { useMutation } from 'react-query'
import { useActions } from '../useActions'
import { IDevice } from '@/services/Device/device.types'

export const useAddToCart = (device: IDevice) => {
	const { addToCart } = useActions()
	return useMutation(['add to cart'], () => CartService.addToCart({ productId: device._id }), {
		onSuccess: data => {
			if (data?.data.success) addToCart(device)
		},
	})
}
