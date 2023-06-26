import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ICart, IChangeQuantity, IProduct, ICartProps } from '@/services/Cart/cart.types'
import { IDevice } from '@/services/Device/device.types'

const initialState: ICart = {
	products:
		typeof window !== 'undefined' && localStorage.getItem('cart')
			? JSON.parse(localStorage.getItem('cart') as string)
			: [],
	totalAmount: 0,
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setCart: (state, action: PayloadAction<IProduct[]>) => {
			state.products = action.payload
		},
		addToCart: (state, action: PayloadAction<IDevice>) => {
			const isExist = state.products?.some(item => item.product._id === action.payload._id)

			if (!isExist) {
				state.products?.push({
					product: action.payload,
					quantity: 1,
				})
			}
		},
		removeFromCart: (state, action: PayloadAction<ICartProps>) => {
			state.products =
				state.products?.filter(item => item.product._id !== action.payload.productId) || []
		},
		changeQuantity: (state, action: PayloadAction<IChangeQuantity>) => {
			const { productId, quantity } = action.payload
			const item = state.products?.find(item => item.product._id === productId)
			if (item) item.quantity = quantity
		},
		setTotalAmount: state => {
			state.totalAmount = state.products
				? state.products.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
				: 0
		},
		resetCart: state => {
			state.products = []
		},
	},
})

export const cartActions = cartSlice.actions
export const cartReducer = cartSlice.reducer
