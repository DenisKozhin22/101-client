'use client'

import { GridItem, Skeleton, SkeletonText } from '@chakra-ui/react'
import { FC } from 'react'

const DeviceSceleton: FC = () => {
	return (
		<GridItem p='2'>
			<Skeleton h='210px' w='wull' mx='auto' mb='2' rounded='md' />
			<SkeletonText noOfLines={1} skeletonHeight='4' mb='4'rounded='md' />
			<Skeleton h='45px' w='wull' rounded='md'/>
		</GridItem>
	)
}

export default DeviceSceleton
