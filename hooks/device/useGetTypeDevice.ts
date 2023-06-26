import { DeviceService } from '@/services/Device/device.service'
import { ITypeDevices } from '@/services/Device/device.types'
import { AxiosResponse } from 'axios'
import { useQuery } from 'react-query'

export const useGetTypeDevice = () => {
	return useQuery<AxiosResponse<ITypeDevices[]>>('typesDevices', () => DeviceService.getTypes())
}
