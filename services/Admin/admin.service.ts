import { formDataAxiosInstance, instance } from '@/api'
import { IAdminRes, ISeriesProps } from './admin.types'
import { AxiosResponse } from 'axios'
import { IDeviceProps } from '@/components/Modals/AdminModals/CreateDeviceModal'

export const AdminService = {
	async createSeries({ name, type }: ISeriesProps): Promise<AxiosResponse<IAdminRes>> {
		return instance.post<IAdminRes>('admin/create-device-series', { name, type })
	},
	async createDevice(data: FormData) {
		return formDataAxiosInstance.post('admin/create-device', data)
	},
}
