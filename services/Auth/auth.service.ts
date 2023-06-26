import { axiosClassic, instance } from '@/api'
import { AxiosResponse } from 'axios'
import { IAuthResponse, ILoginProps, IRegisterProps, IUser } from './auth.types'

export const AuthService = {
	async login(data: ILoginProps): Promise<AxiosResponse<IAuthResponse>> {
		return axiosClassic.post<IAuthResponse>('/auth/login', data)
	},
	async register(data: IRegisterProps): Promise<AxiosResponse<IAuthResponse>> {
		return axiosClassic.post<IAuthResponse>('/auth/register', data)
	},
	async getMe(): Promise<AxiosResponse<IUser>> {
		return instance.get<IUser>('/auth/getMe')
	},
	async refreshToken(): Promise<AxiosResponse<IAuthResponse>> {
		return instance.get<IAuthResponse>('/auth/refresh')
	},
	async logout() {
		return instance.post('/auth/logout')
	},
}
