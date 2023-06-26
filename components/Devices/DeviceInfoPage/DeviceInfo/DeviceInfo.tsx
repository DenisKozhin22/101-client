import {
	Table,
	TableContainer,
	Tbody,
	Td,
	Tfoot,
	Th,
	Thead,
	Tr,
} from '@/chakraUI/chakra'
import { IDeviceInfo } from '@/services/Device/device.types'

interface IDeviceInfoProps {
	deviceInfo: IDeviceInfo[]
}
export default function DeviceInfo({ deviceInfo }: IDeviceInfoProps) {
	return (
		<TableContainer>
			<Table variant='striped' colorScheme='gray'>
				<Thead>
					<Tr>
						<Th>Title</Th>
						<Th>Description</Th>
					</Tr>
				</Thead>
				<Tbody>
					{deviceInfo.map(item => (
						<Tr key={item.title}>
							<Td>{item.title}</Td>
							<Td>{item.description}</Td>
						</Tr>
					))}
				</Tbody>
				<Tfoot>
					<Tr>
						<Th>Title</Th>
						<Th>Description</Th>
					</Tr>
				</Tfoot>
			</Table>
		</TableContainer>
	)
}
