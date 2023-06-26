import { IAuthResponse } from '@/services/Auth/auth.types'
import axios from 'axios'
import { parseCookies } from 'nookies'

export const axiosClassic = axios.create({
	withCredentials: true,
	baseURL: process.env.BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
})

export const instance = axios.create({
	withCredentials: true,
	baseURL: process.env.BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
})

export const formDataAxiosInstance = axios.create({
	withCredentials: true,
	baseURL: process.env.BASE_URL,
	headers: {
		'Content-Type': 'multipart/form-data',
	},
})

instance.interceptors.request.use(config => {
	const cookies = parseCookies()
	config.headers.Authorization = `Bearer ${cookies.accessToken}`
	return config
})

instance.interceptors.response.use(
	config => {
		return config
	},
	async error => {
		const originalRequest = error.config
		if (error.response.status === 401 && error.config && !error.config._isRetry) {
			try {
				originalRequest._isRetry = true
				const { data } = await axiosClassic.get<IAuthResponse>(
					`${process.env.BASE_URL}/auth/refresh`,
					{
						withCredentials: true,
					},
				)
				originalRequest.headers.Authorization = `Bearer ${data.accessToken}`

				return instance.request(originalRequest)
			} catch (error) {
				console.log('Не авторизован')
				console.log(error)
			}
		}
	},
)
formDataAxiosInstance.interceptors.request.use(config => {
	const cookies = parseCookies()
	config.headers.Authorization = `Bearer ${cookies.accessToken}`
	return config
})

formDataAxiosInstance.interceptors.response.use(
	config => {
		return config
	},
	async error => {
		const originalRequest = error.config
		if (error.response.status === 401 && error.config && !error.config._isRetry) {
			try {
				originalRequest._isRetry = true
				const { data } = await axiosClassic.get<IAuthResponse>(
					`${process.env.BASE_URL}/auth/refresh`,
					{
						withCredentials: true,
					},
				)
				originalRequest.headers.Authorization = `Bearer ${data.accessToken}`

				return instance.request(originalRequest)
			} catch (error) {
				console.log('Не авторизован')
				console.log(error)
			}
		}
	},
)
