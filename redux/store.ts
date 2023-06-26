import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { userReducer } from './slices/user.slice'
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { filtersReducer } from './slices/filters/filters.slice'
import { devicesReducer } from './slices/device/device.slice'
import { cartReducer } from './slices/cart/cart.slice'
import { favoritesReducer } from './slices/favorites/favorites.slice'

const rootReducer = combineReducers({
	user: userReducer,
	filters: filtersReducer,
	devices: devicesReducer,
	cart: cartReducer,
	favorites: favoritesReducer,
})

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['user', 'cart', 'favorites'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof rootReducer>
