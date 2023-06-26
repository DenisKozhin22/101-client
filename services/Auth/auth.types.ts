export interface IAuthResponse {
	accessToken: string
	refreshToken: string
	user: {
		email: string
		name: string
		id: string
		isAdmin: boolean
	}
}
export interface ILoginProps {
	email: string
	password: string
}
export interface IRegisterProps extends ILoginProps {
	userName: string
}
export interface IUser {
	_id: string
	userName: string
	email: string
	isAdmin: boolean
}
