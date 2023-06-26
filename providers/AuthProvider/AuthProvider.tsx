import { parseCookies } from 'nookies'
import { FC, PropsWithChildren, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/auth/useAuth'
import { protectedRoutes } from './protectedRoutes'
import { useGetUser } from '@/hooks/auth/useGetUser'
import { useLogout } from '@/hooks/auth/useLogout'

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const user = useAuth()
	const pathname = usePathname()
	const router = useRouter()

	const { refetch: refetcUserData } = useGetUser()
	const { mutate: logout } = useLogout()
	const { refreshToken } = parseCookies()

	useEffect(() => {
		const { refreshToken } = parseCookies()

		refreshToken && refetcUserData()

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		const { refreshToken } = parseCookies()
		if (!refreshToken && user) {
			logout()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname])

	const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route))

	if (!isProtectedRoute) return <>{children}</>

	if (user && isProtectedRoute) return <>{children}</>

	!user && isProtectedRoute && !refreshToken && router.replace('/')

	return null
}

export default AuthProvider
