import { AdminService } from '@/services/Admin/admin.service'
import { ISeriesProps } from '@/services/Admin/admin.types'
import { useToast } from '@chakra-ui/react'
import { AxiosError } from 'axios'
import { useMutation } from 'react-query'

export const useCreateSeries = () => {
	const toast = useToast()
	return useMutation(['create series'], (data: ISeriesProps) => AdminService.createSeries(data), {
		onSuccess: data => {
			if (data && data?.data.success) {
				toast({
					title: 'Creating a series',
					description: 'The device series has been created',
					status: 'success',
					position: 'top',
					duration: 4000,
					isClosable: true,
				})
			}
		},
		onError: ({ response }: AxiosError) => {
			toast({
				title: 'Error creating a series',
				description: 'An error occurred while creating the series',
				status: 'error',
				position: 'top',
				duration: 3000,
				isClosable: true,
			})
		},
	})
}
function toast(arg0: {
	title: string
	description: string
	status: string
	position: string
	duration: number
	isClosable: boolean
}) {
	throw new Error('Function not implemented.')
}
