'use client'

import { FC, useEffect } from 'react'
import DeviceCard from '../DeviceCard/DeviceCard'
import { Grid } from '@/chakraUI/chakra'
import { useParams, useSearchParams } from 'next/navigation'
import { useFilters } from '@/hooks/filter/useFilters'
import { useGetDevices } from '@/hooks/device/useGetDevices'
import DeviceSceleton from './DeviceSceleton/DeviceSceleton'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/types/useTypedSelector'
import { useGetFavorites } from '@/hooks/favorites/useGetFavorites'

const DevicesList: FC = () => {
	const { queryParams } = useFilters()
	const { slug: category } = useParams()
	const searchParams = useSearchParams()
	const { resetQueryParams } = useActions()

	const { isFetching } = useGetDevices(queryParams, category)
	useGetFavorites()
	const { devices } = useTypedSelector(state => state.devices)

	const items = devices?.map(device => <DeviceCard key={device._id} {...device} />)
	const sceletons = [...Array(6)].map((_, i) => <DeviceSceleton key={i} />)

	useEffect(() => {
		const entries = searchParams.entries()
		const paramsArr = [...entries]
		!paramsArr.length && resetQueryParams()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	return (
		<>
			<Grid
				w='full'
				templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
				templateRows={'repeat(2, 1fr)'}
				gap='2'
				mb='2'>
				{isFetching ? sceletons : items}
			</Grid>
		</>
	)
}

export default DevicesList
