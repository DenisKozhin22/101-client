'use client'
import { useGetTypeDevice } from '@/hooks/device/useGetTypeDevice'
import { Grid, GridItem, Image, LinkBox, LinkOverlay, Heading } from '@chakra-ui/react'
import { FC } from 'react'
import NextLink from 'next/link'

const categoriesImages = [
	'/types/iphone.jpeg',
	'/types/mac.jpeg',
	'/types/ipad.jpeg',
	'/types/watch.jpg',
	'/types/imac.jpg',
	'/types/airpods.png',
]

const Categories: FC = () => {
	const { data: types } = useGetTypeDevice()
	return (
		<Grid
			templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
			templateRows='repeat(2, 250px)'
			mb='2'>
			{types?.data.map((type, i) => (
				<LinkBox as={GridItem} key={type._id} pt='8' pb='3' border='1px solid RGBA(0, 0, 0, 0.08)'>
					<LinkOverlay as={NextLink} href={`/categories/${type.slug}`}>
						<Image
							src={categoriesImages[i]}
							alt={categoriesImages[i]}
							maxW='full'
							maxH='170px'
							mx='auto'
						/>
						<Heading as='h3' size='sm' textAlign='center'>
							{type.name}
						</Heading>
					</LinkOverlay>
				</LinkBox>
			))}
		</Grid>
	)
}

export default Categories
