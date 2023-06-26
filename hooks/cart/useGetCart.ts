import { CartService } from '@/services/Cart/cart.service'
import { useQuery } from 'react-query'
import { useActions } from '../useActions'

export const useGetCart = () => {
	const { setCart } = useActions()
	return useQuery('get cart', () => CartService.getCart(), {
		enabled: true,
		onSuccess: data => {
			setCart(data.data)
		},
	})
}
