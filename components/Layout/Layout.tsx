'use client'

import { FC, PropsWithChildren, useEffect } from 'react'
import Header from '../Header/Header'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../Footer/Footer'
import { useTypedSelector } from '@/types/useTypedSelector'
import { useActions } from '@/hooks/useActions'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const { products } = useTypedSelector(state => state.cart)
	const { setTotalAmount } = useActions()

	useEffect(() => {
		setTotalAmount()
	}, [products, setTotalAmount])

	return (
		<Box minH='100vh' display='flex' flexDirection='column'>
			<Header />
			<Container maxW='container.xl'>{children}</Container>
			<Footer />
		</Box>
	)
}

export default Layout
