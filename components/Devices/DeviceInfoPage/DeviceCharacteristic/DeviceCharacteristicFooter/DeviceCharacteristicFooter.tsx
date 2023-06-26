'use client'

import { useAddToCart } from '@/hooks/cart/useAddToCart'
import { useRemoveFromCart } from '@/hooks/cart/useRemoveFromCart'
import { useAddToFavorites } from '@/hooks/favorites/useAddToFavorites'
import { useRemoveFromFavorites } from '@/hooks/favorites/useRemoveFromFavorites'
import { IDevice } from '@/services/Device/device.types'
import { useTypedSelector } from '@/types/useTypedSelector'
import { Button, Divider, Flex } from '@chakra-ui/react'
import { AiFillHeart } from 'react-icons/ai'

interface IDeviceCharacteristicFooter {
	device: IDevice
}
export default function DeviceCharacteristicFooter({ device }: IDeviceCharacteristicFooter) {
	const { cart, favorites } = useTypedSelector(state => state)

	const isCartElement = cart.products?.find(cartItem => cartItem.product._id === device._id)
	const isFavoriteElement = favorites.products?.find(cartItem => cartItem._id === device._id)

	const { mutateAsync: addToFavorites } = useAddToFavorites(device)
	const { mutateAsync: removeFromFavorites } = useRemoveFromFavorites(device)

	const { mutateAsync: addToCart, isLoading: isAdd } = useAddToCart(device)
	const { mutateAsync: removeFromCart, isLoading: isRemove } = useRemoveFromCart(device._id)

	const onAddToFavorites = async () => {
		try {
			isFavoriteElement ? removeFromFavorites() : addToFavorites()
		} catch (error) {
			console.log(error)
		}
	}

	const onAddToCart = async () => {
		try {
			isCartElement ? removeFromCart() : addToCart()
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<>
		<Divider/>
			<Flex justifyContent='center' gap='3' my='3'>
				<Button variant='main' m='0' w='32' onClick={onAddToCart}>
					{isCartElement ? 'Remove' : 'Add'}
				</Button>
				<Flex
					cursor='pointer'
					onClick={onAddToFavorites}
					justifyContent='center'
					alignItems='center'
					rounded='md'
					border={isFavoriteElement ? '1px solid #E53E3E' : '1px solid RGBA(0, 0, 0, 0.16)'}
					w='10'
					h='10'>
					<AiFillHeart size='28px' color={isFavoriteElement ? '#E53E3E' : 'RGBA(0, 0, 0, 0.16)'} />
				</Flex>
			</Flex>
		</>
	)
}
