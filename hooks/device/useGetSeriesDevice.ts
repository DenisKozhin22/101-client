import { DeviceService } from '@/services/Device/device.service'
import { useMutation, useQuery } from 'react-query'

export const useGetSeriesDevice = () => {
	return useMutation(['get series'], (slug: string) => DeviceService.getSeries(slug))
}
