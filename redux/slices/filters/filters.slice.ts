import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { EnumProductSort, IFilterActionPayload, IFilterState } from './filters.types'
import { IDeviceSeries } from '@/services/Filter/filter.types'

const initialState: IFilterState = {
	isFilterUpdated: false,
	queryParams: {
		page: 1,
		limit: 6,
		name: '',
		price: EnumProductSort.LOW_PRICE,
		colors: '',
		series: '',
	},
	parameters: {
		series: [],
		colors: [],
	},
}

const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		updateQueryParam: (state, action: PayloadAction<IFilterActionPayload>) => {
			const { key, value } = action.payload
			state.queryParams[key] = value
			state.isFilterUpdated = true
		},
		setSeries: (state, action: PayloadAction<IDeviceSeries[]>) => {
			state.parameters.series = action.payload
		},
		setColors: (state, action: PayloadAction<string[]>) => {
			state.parameters.colors = action.payload
		},
		resetFilterUpdate: state => {
			state.isFilterUpdated = false
		},
		resetQueryParams: state => {
			state.queryParams = {
				page: 1,
				limit: 6,
				name: '',
				price: EnumProductSort.LOW_PRICE,
				colors: '',
				series: '',
			}
		},
	},
})

export const filtersActions = filtersSlice.actions
export const filtersReducer = filtersSlice.reducer
