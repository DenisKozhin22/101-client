import {
	Box,
	Heading,
	Table,
	TableContainer,
	Tbody,
	Td,
	Tfoot,
	Th,
	Thead,
	Tr,
} from '@/chakraUI/chakra'
import { IDevice } from '@/services/Device/device.types'

interface IDeviceCharacteristic {
	device: IDevice
}
export default function DeviceCharacteristic({ device }: IDeviceCharacteristic) {
	return (
		<Box>
			<Heading as='h1' fontSize='3xl' textAlign='center' mb='4'>
				{device.name}
			</Heading>
			<TableContainer>
				<Table variant='simple'>
					<Thead>
						<Tr>
							<Th>Characteristic</Th>
							<Th>Info</Th>
						</Tr>
					</Thead>
					<Tbody>
						<Tr>
							<Td>Brand</Td>
							<Td>{device.brand.name}</Td>
						</Tr>
						<Tr>
							<Td>Category</Td>
							<Td>{device.type.name}</Td>
						</Tr>
						<Tr>
							<Td>Series</Td>
							<Td>{device.series.name}</Td>
						</Tr>
						<Tr>
							<Td>Color</Td>
							<Td>{device.color}</Td>
						</Tr>
						<Tr>
							<Td>Price</Td>
							<Td>{device.price}</Td>
						</Tr>
					</Tbody>
					<Tfoot>
						<Tr>
							<Th>Characteristic</Th>
							<Th>Info</Th>
						</Tr>
					</Tfoot>
				</Table>
			</TableContainer>
		</Box>
	)
}
