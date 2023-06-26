import { AuthService } from '@/services/Auth/auth.service'
import { IRegisterProps } from '@/services/Auth/auth.types'
import { useToast } from '@chakra-ui/react'
import { AxiosError } from 'axios'
import { useMutation } from 'react-query'

export const useRegister = () => {
	const toast = useToast()
	return useMutation('login', (data: IRegisterProps) => AuthService.register(data), {
		onSuccess: data => {
			if (data && data?.data) {
				toast({
					title: 'Account registration',
					description: 'You have registered your account ',
					status: 'success',
					position: 'top',
					duration: 4000,
					isClosable: true,
				})
			}
		},
		onError: ({ response }: AxiosError) => {
			toast({
				title: 'Account registration error',
				description: 'Something went wrong when registering',
				status: 'error',
				position: 'top',
				duration: 3000,
				isClosable: true,
			})
		},
	})
}
