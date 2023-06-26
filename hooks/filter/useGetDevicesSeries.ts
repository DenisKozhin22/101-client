import { TypeProductDataFilters } from '@/redux/slices/filters/filters.types'
import { FilterService } from '@/services/Filter/filter.service'
import { useQuery } from 'react-query'
import { useActions } from '../useActions'
import { useFilters } from './useFilters'

export const useGetDevicesSeries = (queryParams: TypeProductDataFilters, category: string) => {
	const { setSeries } = useActions()
	return useQuery(
		['get devices series', queryParams],
		() => FilterService.getDeviceSeries(queryParams, category),
		{
			enabled: true,
			onSuccess: data => {
				setSeries(data.data)
			},
		},
	)
}
