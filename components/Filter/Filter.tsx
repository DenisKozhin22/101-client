'use client'

import { FC, useEffect } from 'react'

import { Flex } from '@chakra-ui/react'
import FilterDrawer from './FilterDrawer/FilterDrawer'
import FilterPopover from './FilterPopover/FilterPopover'
import { useFilters } from '@/hooks/filter/useFilters'
import { useParams } from 'next/navigation'
import { useGetDevicesSeries } from '@/hooks/filter/useGetDevicesSeries'
import { useGetDevicesColors } from '@/hooks/filter/useGetDevicesColors'

const Filter: FC = () => {
	const { queryParams, updateQueryParams, isFilterUpdated } = useFilters()

	const { slug: category } = useParams()

	useGetDevicesSeries(queryParams, category)
	useGetDevicesColors(queryParams, category)

	return (
		<Flex alignItems='center' justifyContent='space-between' my='2'>
			<FilterDrawer />
			<FilterPopover />
		</Flex>
	)
}

export default Filter
