'use client'

import { useGetCart } from '@/hooks/cart/useGetCart'
import { useTypedSelector } from '@/types/useTypedSelector'
import { FC } from 'react'
import CartItem from './CartItem/CartItem'
import { Alert, AlertIcon, VStack } from '@chakra-ui/react'
import CartFooter from './CartFooter/CartFooter'

const Cart: FC = () => {
	useGetCart()
	const cart = useTypedSelector(state => state.cart)
	return (
		<>
			<VStack gap='1' my='4'>
				{cart.products?.map(item => (
					<CartItem key={item.product._id} {...item} />
				))}
				{!cart.products?.length && (
					<Alert status='info' justifyContent='center'>
						<AlertIcon />
						There is nothing in favorites!
					</Alert>
				)}
			</VStack>
			<CartFooter />
		</>
	)
}

export default Cart
