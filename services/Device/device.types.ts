export interface IDeviceInfo {
	title: string
	description: string
}

export interface ISeriesDevices {
	_id: string
	name: string
	type: string
}
export interface ITypeDevices {
	_id: string
	name: string
	slug: string
}

export interface IBrandDevices {
	_id: string
	name: string
}
export interface IModelsDevices {
	_id: string
	name: string
}

export interface IDevice {
	_id: string
	name: string
	series: ISeriesDevices
	price: number
	img: string
	color: string
	brand: IBrandDevices
	type: ITypeDevices
}
