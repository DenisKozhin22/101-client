import { TypeProductDataFilters } from '@/redux/slices/filters/filters.types'
import { FilterService } from '@/services/Filter/filter.service'
import { useQuery } from 'react-query'
import { useActions } from '../useActions'

export const useGetDevicesColors = (queryParams: TypeProductDataFilters, category: string) => {
	const { setColors } = useActions()
	return useQuery(
		['get devices colors', queryParams.series],
		() => FilterService.getDeviceColors(queryParams, category),
		{
			enabled: true,
			onSuccess: data => {
				setColors(data.data)
			},
		},
	)
}
