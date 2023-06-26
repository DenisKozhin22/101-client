import { IUser } from '@/services/Auth/auth.types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IUserState {
	user: IUser | null
}

const initialState: IUserState = {
	user:
		typeof window !== 'undefined' && localStorage.getItem('user')
			? JSON.parse(localStorage.getItem('user') as string)
			: null,
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUserData: (state, action: PayloadAction<IUser>) => {
			state.user = action.payload
		},
		logout: state => {
			state.user = null
		},
	},
})

export const userActions = userSlice.actions
export const userReducer = userSlice.reducer
