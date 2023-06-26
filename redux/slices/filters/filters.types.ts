import { IDevice } from '@/services/Device/device.types'
import { IDeviceSeries } from '@/services/Filter/filter.types'

export enum EnumProductSort {
	LOW_PRICE = 'asc',
	HIGH_PRICE = 'desc',
}

export type TypeProductDataFilters = {
	page?: number | string
	limit?: number | string
	name?: string
	price?: string
	colors?: string
	series?: string
}

export interface IFilterState {
	isFilterUpdated: boolean
	queryParams: TypeProductDataFilters
	parameters: {
		series: IDeviceSeries[]
		colors: string[]
	}
}

export interface IFilterActionPayload {
	key: keyof TypeProductDataFilters
	value: string
}

export interface IFilter {
	devices: IDevice[]
	totalDevices: number
	totalPages: number
	activePage: number
	productsOnPage: number
}
