'use client'

import { FC } from 'react'
import { useGetFavorites } from '@/hooks/favorites/useGetFavorites'
import { useTypedSelector } from '@/types/useTypedSelector'
import { Alert, AlertIcon, Grid, VStack } from '@chakra-ui/react'
import DeviceCard from '../Devices/DeviceCard/DeviceCard'

const Favorites: FC = () => {
	useGetFavorites()
	const { products } = useTypedSelector(state => state.favorites)
	return (
		<>
			<Grid
				w='full'
				templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
				gap='2'
				my='2'>
				{products?.map(item => (
					<DeviceCard key={item._id} {...item} />
				))}
			</Grid>
			{!products.length && (
				<Alert status='info' justifyContent='center' >
					<AlertIcon />
					There is nothing in favorites!
				</Alert>
			)}
		</>
	)
}

export default Favorites
