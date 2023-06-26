import { IDevice } from '../Device/device.types'

export interface IProduct {
	product: IDevice
	quantity: number
}

export interface ICartProps {
	productId: string
}

export interface ICartResponse extends ICartProps {
	success: boolean
}

export interface IChangeQuantity extends ICartProps {
	quantity: number
}

export interface ICart {
	products: IProduct[] | null
	totalAmount: number
}
