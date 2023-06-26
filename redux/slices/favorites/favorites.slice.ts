import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IFavoritesState } from './favorites.types'
import { IDevice } from '@/services/Device/device.types'

const initialState: IFavoritesState = {
	products:
		typeof window !== 'undefined' && localStorage.getItem('favorites')
			? JSON.parse(localStorage.getItem('favorites') as string)
			: [],
}

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		setFavorites: (state, action: PayloadAction<IDevice[]>) => {
			state.products = action.payload
		},
		addToFavorites: (state, action: PayloadAction<IDevice>) => {
			const isExist = state.products?.some(item => item._id === action.payload._id)

			if (!isExist) {
				state.products?.push(action.payload)
			}
		},
		removeFromFavorites: (state, action: PayloadAction<IDevice>) => {
			state.products = state.products?.filter(item => item._id !== action.payload._id) || []
		},
		resetFavorites: state => {
			state.products = []
		},
	},
})

export const favoritesActions = favoritesSlice.actions
export const favoritesReducer = favoritesSlice.reducer
