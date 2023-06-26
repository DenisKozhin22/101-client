'use client'
import { FC } from 'react'
import { useAddToCart } from '@/hooks/cart/useAddToCart'
import { IDevice } from '@/services/Device/device.types'
import { useTypedSelector } from '@/types/useTypedSelector'
import {
	Card,
	CardBody,
	Image,
	Heading,
	CardFooter,
	Button,
	Text,
	GridItem,
	Flex,
	Box,
} from '@chakra-ui/react'
import { AiFillHeart } from 'react-icons/ai'
import { useAddToFavorites } from '@/hooks/favorites/useAddToFavorites'
import { useRemoveFromFavorites } from '@/hooks/favorites/useRemoveFromFavorites'
import { useRemoveFromCart } from '@/hooks/cart/useRemoveFromCart'
import Link from 'next/link'

const DeviceCard: FC<IDevice> = device => {
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
		<GridItem>
			<Card maxW={{ base: 'sm', sm: 'full' }} mx='auto' minH='310px'>
				<CardBody p='2'>
					<Box position='absolute' right='8px' cursor='pointer' onClick={onAddToFavorites}>
						<AiFillHeart
							size='28px'
							color={isFavoriteElement ? '#E53E3E' : 'RGBA(0, 0, 0, 0.16)'}
						/>
					</Box>
					<Image
						maxW='auto'
						mx='auto'
						h='200px'
						mb='2'
						src={`http://localhost:5000/${device.img}`}
						alt={`${device.name}`}
					/>
					<Link href={`/categories/${device.type.slug}/${device._id}`}>
						<Heading size='sm' textAlign='center' mx='auto'>
							{device.name}
						</Heading>
					</Link>
					<CardFooter p='2'>
						<Flex w='full' mt='3' alignItems='center' justifyContent='center'>
							<Text mt='0' mr='3' color='blackAlpha.800' fontSize={{ base: 'sm', md: 'xl' }}>
								{device.price} ₽
							</Text>
							<Button variant='main' m='0' onClick={onAddToCart}>
								{isCartElement ? 'Remove' : 'Add'}
							</Button>
						</Flex>
					</CardFooter>
				</CardBody>
			</Card>
		</GridItem>
	)
}

export default DeviceCard
