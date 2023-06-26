import CreateSeriesModel from '@/components/Modals/AdminModals/CreateSeriesModel'
import { Metadata } from 'next'
import { Flex, Heading } from '@/chakraUI/chakra'
import CreateDeviceModal from '@/components/Modals/AdminModals/CreateDeviceModal'
export const metadata: Metadata = {
	title: 'Admin Panel',
}

export default function AdminPage() {
	return (
		<>
			<Heading as='h1' fontSize='2xl' my='2' textAlign='center'>
				Admin Panel
			</Heading>
			<Flex my='2' justifyContent='center' gap='2'>
				<CreateSeriesModel />
				<CreateDeviceModal/>
			</Flex>
		</>
	)
}
