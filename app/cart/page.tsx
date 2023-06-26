import Cart from '@/components/Cart/Cart'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Cart',
}

export default function CartPage() {
	return <Cart/>
}
