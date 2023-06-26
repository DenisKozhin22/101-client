import { AuthService } from '@/services/Auth/auth.service'
import { useMutation } from 'react-query'
import { useActions } from '../useActions'
import { useToast } from '@chakra-ui/react'

export const useLogout = () => {
	const { logout, resetCart, resetFavorites } = useActions()
	const toast = useToast()
	return useMutation('logout', () => AuthService.logout(), {
		onSuccess: () => {
			logout()
			resetCart()
			resetFavorites()
			toast({
				title: 'Log out of your account',
				description: 'You have logged out of your account',
				status: 'success',
				position: 'top',
				duration: 4000,
				isClosable: true,
			})
		},
	})
}
