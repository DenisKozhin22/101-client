import { CartService } from '@/services/Cart/cart.service'
import { IChangeQuantity } from '@/services/Cart/cart.types'
import { useMutation } from 'react-query'
import { useActions } from '../useActions'

export const useChangeQuantityFromCart = () => {
	const { changeQuantity } = useActions()
	return useMutation(
		['change quantity from cart'],
		({ productId, quantity }: IChangeQuantity) =>
			CartService.changeQuantity({ productId, quantity }),
		{
			onSuccess: data => {
				if (data?.data) changeQuantity(data.data)
			},
		},
	)
}
