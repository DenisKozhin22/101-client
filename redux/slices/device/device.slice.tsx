import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IDevicesState } from './devcie.types'
import { IDevice } from '@/services/Device/device.types'
import { IFilter } from '../filters/filters.types'

const initialState: IDevicesState = {
	devices: [],
	totalDevices: 0,
	totalPages: 0,
	activePage: 0,
	productsOnPage: 0
}

const deviceSlice = createSlice({
	name: 'devices',
	initialState,
	reducers: {
		setDevices: (state, action: PayloadAction<IFilter>) => {
			state.devices = action.payload.devices
			state.totalDevices = action.payload.totalDevices
			state.totalPages = action.payload.totalPages
			state.activePage = action.payload.activePage
			state.productsOnPage = action.payload.productsOnPage
		},
		resetDevices: state => {
			state.devices = []
		},
	},
})

export const devicesActions = deviceSlice.actions
export const devicesReducer = deviceSlice.reducer
