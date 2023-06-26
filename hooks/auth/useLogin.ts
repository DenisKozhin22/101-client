import { AuthService } from '@/services/Auth/auth.service'
import { ILoginProps } from '@/services/Auth/auth.types'
import { useToast } from '@chakra-ui/react'
import { AxiosError } from 'axios'
import { useMutation } from 'react-query'

export const useLogin = () => {
	const toast = useToast()
	return useMutation('login', (data: ILoginProps) => AuthService.login(data), {
		onSuccess: data => {
			if (data && data?.data) {
				toast({
					title: 'Log in to your account',
					description: 'You are logged in to your account',
					status: 'success',
					position: 'top',
					duration: 4000,
					isClosable: true,
				})
			}
		},
		onError: ({ response }: AxiosError) => {
			toast({
				title: response?.status === 400 ? 'Authentication Failed!' : 'An error has occurred',
				description: response?.status === 400 ? 'Enter the correct data' : 'Something went wrong',
				status: 'error',
				position: 'top',
				duration: 3000,
				isClosable: true,
			})
		},
	})
}
