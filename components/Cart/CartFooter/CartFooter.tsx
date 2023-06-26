'use client'

import { useTypedSelector } from '@/types/useTypedSelector'
import { Divider, Flex, Heading, Button } from '@chakra-ui/react'
import { FC } from 'react'

const CartFooter: FC = () => {
	const { totalAmount } = useTypedSelector(state => state.cart)
	return (
		<>
			<Divider mt='4' />
			<Flex w='full' my='4' justifyContent='flex-end' alignItems='center' gap='4'>
				<Heading as='h4' fontSize='lg'>
					Order amount: {totalAmount} ₽
				</Heading>
				<Button variant='main' minW='32'>
					To pay
				</Button>
			</Flex>
		</>
	)
}

export default CartFooter
