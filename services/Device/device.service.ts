import { axiosClassic } from '@/api'
import { AxiosResponse } from 'axios'
import { IDevice, IDeviceInfo, ISeriesDevices, ITypeDevices } from './device.types'
import { IFilter, TypeProductDataFilters } from '@/redux/slices/filters/filters.types'

export const DeviceService = {
	async getOneType(slug: string): Promise<AxiosResponse<ITypeDevices>> {
		return axiosClassic.get<ITypeDevices>(`/device/types/${slug}`)
	},
	async getTypes(): Promise<AxiosResponse<ITypeDevices[]>> {
		return axiosClassic.get<ITypeDevices[]>('/device/types')
	},
	async getSeries(slug: string): Promise<AxiosResponse<ISeriesDevices[]>> {
		return axiosClassic.get<ISeriesDevices[]>(`/device/series/${slug}`)
	},
	async getDevice(id: string): Promise<AxiosResponse<IDevice>> {
		return axiosClassic.get<IDevice>(`device/device/${id}`)
	},
	async getAllDevices(): Promise<AxiosResponse<IDevice[]>> {
		return axiosClassic.get<IDevice[]>('device/devices')
	},
	async getDeviceInfo(id: string): Promise<AxiosResponse<IDeviceInfo[]>> {
		return axiosClassic.get<IDeviceInfo[]>(`device/device-info/${id}`)
	},
	async getFilterDevices(
		queryParams?: TypeProductDataFilters,
		category?: string,
	): Promise<AxiosResponse<IFilter>> {
		return axiosClassic.get<IFilter>(`/device/devices/${category}`, {
			params: queryParams ? queryParams : {},
		})
	},
}
