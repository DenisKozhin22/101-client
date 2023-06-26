import { Grid, GridItem } from '@/chakraUI/chakra'
import { IDevice, IDeviceInfo } from '@/services/Device/device.types'
import Image from 'next/image'
import DeviceCharacteristic from './DeviceCharacteristic/DeviceCharacteristic'
import DeviceCharacteristicFooter from './DeviceCharacteristic/DeviceCharacteristicFooter/DeviceCharacteristicFooter'
import DeviceInfo from './DeviceInfo/DeviceInfo'

interface IDeviceInfoPageProps {
	device: IDevice
	deviceInfo: IDeviceInfo[]
}

export default function DeviceInfoPage({ device, deviceInfo }: IDeviceInfoPageProps) {
	return (
		<>
			<Grid
				templateColumns={{ base: 'repeat(1, 1fr)',  lg: 'repeat(2, 1fr)' }}>
				<GridItem p='3'>
					<Image
						style={{
							margin: '0 auto',
						}}
						src={`http://localhost:5000/${device.img}`}
						width={350}
						height={350}
						alt={device.img}
					/>
				</GridItem>
				<GridItem p='3'>
					<DeviceCharacteristic device={device} />
					<DeviceCharacteristicFooter device={device} />
				</GridItem>
			</Grid>
			<DeviceInfo deviceInfo={deviceInfo} />
		</>
	)
}
