import { TypeProductDataFilters } from '@/redux/slices/filters/filters.types'
import { DeviceService } from '@/services/Device/device.service'
import { useQuery } from 'react-query'
import { useActions } from '../useActions'

export const useGetDevices = (queryParams: TypeProductDataFilters, category: string) => {
	const { setDevices } = useActions()
	return useQuery(
		['get devices', queryParams],
		() => DeviceService.getFilterDevices(queryParams, category),
		{
			enabled: true,
			onSuccess(data) {
				setDevices(data.data)
			},
		},
	)
}
