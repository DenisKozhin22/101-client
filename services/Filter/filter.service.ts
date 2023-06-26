import { axiosClassic } from '@/api'
import { AxiosResponse } from 'axios'
import { IDeviceSeries } from './filter.types'
import { TypeProductDataFilters } from '@/redux/slices/filters/filters.types'

export const FilterService = {
	async getDeviceSeries(
		queryParams: TypeProductDataFilters,
		category: string,
	): Promise<AxiosResponse<IDeviceSeries[]>> {
		return axiosClassic.get<IDeviceSeries[]>(`device/series/${category}`, {
			params: queryParams ? queryParams : {},
		})
	},
	async getDeviceColors(
		queryParams: TypeProductDataFilters,
		category: string,
	): Promise<AxiosResponse<string[]>> {
		return axiosClassic.get<string[]>(`device/colors/${category}`, {
			params: queryParams ? queryParams : {},
		})
	},
}
