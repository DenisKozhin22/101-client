'use client'
import { persistor, store } from '@/redux/store'
import { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/chakraUI/theme'
import Layout from '@/components/Layout/Layout'
import AuthProvider from './AuthProvider/AuthProvider'
import { PersistGate } from 'redux-persist/integration/react'
import { CacheProvider } from '@chakra-ui/next-js'
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

const MainProvider: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<CacheProvider>
						<ChakraProvider theme={theme}>
							<Layout>
								<AuthProvider>{children}</AuthProvider>
							</Layout>
						</ChakraProvider>
					</CacheProvider>
				</PersistGate>
			</Provider>
		</QueryClientProvider>
	)
}
export default MainProvider
