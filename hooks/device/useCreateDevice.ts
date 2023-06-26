import { IDeviceProps } from '@/components/Modals/AdminModals/CreateDeviceModal'
import { AdminService } from '@/services/Admin/admin.service'
import { useToast } from '@chakra-ui/react'
import { AxiosError } from 'axios'
import { useMutation } from 'react-query'

export const useCreateDevice = () => {
	const toast = useToast()
	return useMutation(['create device'], (data: FormData) => AdminService.createDevice(data), {
		onSuccess: data => {
			if (data && data?.data) {
				toast({
					title: 'Creating a device',
					description: 'The device was successfully created',
					status: 'success',
					position: 'top',
					duration: 4000,
					isClosable: true,
				})
			}
		},
		onError: (error: AxiosError) => {
			toast({
				title: 'Device creation error',
				description: 'An error occurred when creating the device',
				status: 'error',
				position: 'top',
				duration: 3000,
				isClosable: true,
			})
		},
	})
}
