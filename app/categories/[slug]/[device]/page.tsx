import DeviceInfoPage from '@/components/Devices/DeviceInfoPage/DeviceInfoPage'
import { DeviceService } from '@/services/Device/device.service'
import { IPageSlugParam, TypeParamSlug } from '@/types/page-params'
import { Metadata } from 'next'

export const revalidate = 60

export async function generateStaticParams() {
	const respone = await DeviceService.getAllDevices()
	const paths = respone.data.map(item => {
		return {
			params: {
				device: item._id,
			},
		}
	})
	return paths
}

async function getDevice(params: TypeParamSlug) {
	const { data: device } = await DeviceService.getDevice(params.device as string)
	const { data: deviceInfo } = await DeviceService.getDeviceInfo(params.device as string)
	return {
		device,
		deviceInfo,
	}
}

export async function generateMetadata({ params }: IPageSlugParam): Promise<Metadata> {
	await getDevice(params)
	const data = await getDevice(params)
	return {
		title: data.device.name,
		category: data.device.type.name,
	}
}

export default async function DevicePage({ params }: IPageSlugParam) {
	const data = await getDevice(params)
	return (
		<>
			<DeviceInfoPage device={data.device} deviceInfo={data.deviceInfo} />
		</>
	)
}
