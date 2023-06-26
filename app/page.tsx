import { Box } from '@/chakraUI/chakra'
import Categories from '@/components/Categories/Categories'
import Slider from '@/components/Slider/Slider'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Store 101',
}

export default function HomePage() {
	return (
		<Box>
			<Slider />
			<Categories/>
		</Box>
	)
}
