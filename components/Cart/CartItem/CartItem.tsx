'use client'

import { useChangeQuantityFromCart } from '@/hooks/cart/useChangeQuantityFromCart'
import { useRemoveFromCart } from '@/hooks/cart/useRemoveFromCart'
import { IProduct } from '@/services/Cart/cart.types'
import { useTypedSelector } from '@/types/useTypedSelector'
import {
	Box,
	Flex,
	Heading,
	UnorderedList,
	ListItem,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
	Button,
	Spinner,
} from '@chakra-ui/react'
import Image from 'next/image'
import { FC } from 'react'

const CartItem: FC<IProduct> = ({ product }) => {
	const { products } = useTypedSelector(state => state.cart)
	const currentElement = products?.find(cartItem => cartItem.product._id === product._id)

	const { mutateAsync: removeFromCart, isLoading: isRemoval } = useRemoveFromCart(product._id)
	const { mutateAsync: changeQuantityFromCart, isLoading: isChangingQuantity } =
		useChangeQuantityFromCart()

	const OnChangeQuantityFromCart = async (value: number) => {
		try {
			if (value > 5) {
				changeQuantityFromCart({
					productId: product._id,
					quantity: 5,
				})
			} else if (value <= 0) {
				changeQuantityFromCart({
					productId: product._id,
					quantity: 1,
				})
			} else {
				changeQuantityFromCart({
					productId: product._id,
					quantity: value,
				})
			}
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<Flex
			w='full'
			minH='20'
			gap='3'
			alignItems='center'
			flexDirection={{ base: 'column', md: 'row' }}
			boxShadow='0px 5px 10px 2px rgba(0, 0, 0, 0.2)'
			p='4'
			rounded='md'>
			<Box h='full' maxW='24'>
				<Image
					src={`http://localhost:5000/${product.img}`}
					width={100}
					height={70}
					alt={product.img}
				/>
			</Box>
			<Flex
				justifyContent='space-between'
				alignItems='center'
				flexDirection={{ base: 'column', md: 'row' }}
				w='full'
				gap='3'>
				<Flex mx='2' flexDirection='column' gap='3' w='full'>
					<Heading as='h3' fontSize='md' textAlign={{ base: 'center', md: 'start' }}>
						{product.name}
					</Heading>
					<UnorderedList mx={{ base: 'auto', md: '4' }}>
						<ListItem>Category: {product.type.name}</ListItem>
						<ListItem>Series: {product.series.name}</ListItem>
						<ListItem>Color: {product.color}</ListItem>
					</UnorderedList>
				</Flex>
				<Flex minW='200px' justifyContent='center' alignItems='center' gap='3' textAlign='center'>
					{currentElement && product.price * currentElement?.quantity} ₽
					<NumberInput
						defaultValue={currentElement?.quantity}
						min={1}
						max={5}
						w='70px'
						isDisabled={isChangingQuantity}
						onChange={e => OnChangeQuantityFromCart(Number(e))}>
						<NumberInputField min={1} max={5} />
						<NumberInputStepper>
							<NumberIncrementStepper />
							<NumberDecrementStepper />
						</NumberInputStepper>
					</NumberInput>
				</Flex>
				<Button
					onClick={() => removeFromCart()}
					variant='main'
					minW='100px'
					isLoading={isRemoval}
					spinnerPlacement='start'
					spinner={<Spinner />}>
					Remove
				</Button>
			</Flex>
		</Flex>
	)
}

export default CartItem
