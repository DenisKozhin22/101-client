import Filter from '@/components/Filter/Filter'
import { Metadata } from 'next'
import { IPageSlugParam } from '@/types/page-params'
import { DeviceService } from '@/services/Device/device.service'
import DevicesList from '@/components/Devices/DevicesList/DevicesList'
import Pagination from '@/components/Filter/Pagination/Pagination'

export const revalidate = 60

export async function generateStaticParams() {
	const response = await DeviceService.getTypes()

	const paths = response.data.map(category => {
		return {
			params: { slug: category.slug },
		}
	})

	return paths
}

export async function generateMetadata({ params }: IPageSlugParam): Promise<Metadata> {
	const { data } = await DeviceService.getOneType(params.slug as string)
	return {
		title: data.name,
		description: data.name,
	}
}

export default function CategoryPage() {
	return (
		<>
			<Filter />
			<DevicesList />
			<Pagination />
		</>
	)
}
