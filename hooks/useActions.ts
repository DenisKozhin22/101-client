import { useDispatch } from 'react-redux'
import { useMemo } from 'react'
import { bindActionCreators } from '@reduxjs/toolkit'
import { userActions } from '@/redux/slices/user.slice'
import { filtersActions } from '@/redux/slices/filters/filters.slice'
import { devicesActions } from '@/redux/slices/device/device.slice'
import { cartActions } from '@/redux/slices/cart/cart.slice'
import { favoritesActions } from '@/redux/slices/favorites/favorites.slice'
const rootActions = {
	...userActions,
	...filtersActions,
	...devicesActions,
	...cartActions,
	...favoritesActions,
}

export const useActions = () => {
	const dispatch = useDispatch()
	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
