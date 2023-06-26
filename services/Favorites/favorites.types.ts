import { ICartProps } from '../Cart/cart.types'

export interface IFavoritesProps extends ICartProps {}

export interface IFavoritesRes extends ICartProps {
	success: boolean
}
