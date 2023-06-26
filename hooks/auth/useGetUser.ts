import { useQuery } from 'react-query'
import { useActions } from '../useActions'
import { AuthService } from '@/services/Auth/auth.service'

export const useGetUser = () => {
	const { setUserData } = useActions()
	return useQuery('userData', () => AuthService.getMe(), {
		enabled: false,
		onSuccess: data => {
			if (data.data) {
				setUserData(data.data)
			}
		},
	})
}
