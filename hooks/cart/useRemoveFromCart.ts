import { CartService } from '@/services/Cart/cart.service'
import { useMutation } from 'react-query'
import { useActions } from '../useActions'

export const useRemoveFromCart = (productId: string) => {
	const { removeFromCart } = useActions()
	return useMutation('remove from cart', () => CartService.removeFromCart({ productId }), {
		onSuccess: data => {
			if (data?.data) removeFromCart({ productId })
		},
	})
}
