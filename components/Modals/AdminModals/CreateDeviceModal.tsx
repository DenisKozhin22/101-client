'use client'

import { useCreateDevice } from '@/hooks/device/useCreateDevice'
import { useGetSeriesDevice } from '@/hooks/device/useGetSeriesDevice'
import { useGetTypeDevice } from '@/hooks/device/useGetTypeDevice'
import {
	Button,
	FormControl,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	NumberInput,
	NumberInputField,
	Select,
	Spinner,
	VStack,
	useDisclosure,
} from '@chakra-ui/react'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface Iinfo {
	title: string
	description: string
	number: number
}

export interface IDeviceProps {
	name: string
	price: number
	color: string
	type: string
	img: FileList
	deviceInfo: string
	series: string
}
const CreateDeviceModal: FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	const { data: types } = useGetTypeDevice()
	const { data: series, mutateAsync: getSeries } = useGetSeriesDevice()
	const { mutateAsync: createDevice, isLoading: isCreate } = useCreateDevice()

	const [info, setInfo] = useState<Iinfo[] | []>([])
	const [file, setFile] = useState<any>(null)

	const {
		register,
		handleSubmit,
		setValue,
		reset,
		formState: { errors },
	} = useForm<IDeviceProps>({
		mode: 'onSubmit',
	})

	const changeType = (value: string) => {
		const type = types?.data.find(item => item._id === value)
		if (type) {
			getSeries(type?.slug)
			setValue('type', type._id)
		}
	}

	const addInfo = () => {
		setInfo([...info, { title: '', description: '', number: Date.now() }])
	}
	const removeInfo = (title: string) => {
		setInfo(info.filter(item => item.title !== title))
	}

	const changeInfo = (key: string, value: string, number: number) => {
		const items = info.map(item => (item.number === number ? { ...item, [key]: value } : item))
		setInfo(items)
		setValue('deviceInfo', JSON.stringify(items))
	}

	const onSubmit: SubmitHandler<IDeviceProps> = async data => {
		try {
			const formData = new FormData()

			formData.append('name', data.name)
			formData.append('color', data.color)
			formData.append('type', data.type)
			formData.append('deviceInfo', data.deviceInfo)
			formData.append('series', data.series)
			formData.append('img', file)
			formData.append('price', data.price.toString())
			console.log([...formData.entries()])
			createDevice(formData).then(res => res.status === 200 && onClose())
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<>
			<Button onClick={onOpen} variant='main'>
				Create device
			</Button>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent as='form' onSubmit={handleSubmit(onSubmit)}>
					<ModalHeader>Create device</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<FormControl>
							<FormLabel>Type</FormLabel>
							<Select
								placeholder='Select type'
								{...register('type', { required: 'Select type!' })}
								onChange={e => changeType(e.target.value)}>
								{types?.data.map(item => (
									<option key={item._id} value={item._id}>
										{item.name}
									</option>
								))}
							</Select>
						</FormControl>
						<FormControl>
							<FormLabel>Series</FormLabel>
							<Select
								placeholder='Select series'
								{...register('series', { required: 'Select series!' })}>
								{series?.data?.map(item => (
									<option key={item._id} value={item._id}>
										{item.name}
									</option>
								))}
							</Select>
						</FormControl>
						<FormControl>
							<FormLabel>Name</FormLabel>
							<Input
								{...register('name', { required: 'Enter device name!' })}
								placeholder='Device name'
							/>
						</FormControl>
						<FormControl>
							<FormLabel>Color</FormLabel>
							<Input
								{...register('color', { required: 'Enter device color!' })}
								placeholder='Device color'
							/>
						</FormControl>
						<FormControl>
							<FormLabel>Price</FormLabel>
							<NumberInput min={1}>
								<NumberInputField
									{...register('price', { required: 'Enter device price!' })}
									placeholder='Device price'
								/>
							</NumberInput>
						</FormControl>
						<Button variant='main' w='full' onClick={addInfo} my='2'>
							Add info
						</Button>
						<Input {...register('deviceInfo')} display='none' />
						{info.map(item => (
							<FormControl key={item.number} my='2'>
								<VStack>
									<Input
										placeholder='Enter title'
										value={item.title}
										onChange={e => changeInfo('title', e.target.value, item.number)}
									/>
									<Input
										placeholder='Enter description'
										value={item.description}
										onChange={e => changeInfo('description', e.target.value, item.number)}
									/>
									<Button variant='main' ml='auto' onClick={() => removeInfo(item.title)}>
										Delete
									</Button>
								</VStack>
							</FormControl>
						))}
						<Input
							type='file'
							{...register('img', { required: true })}
							onChange={e => e.target.files && setFile(e.target.files[0])}
						/>
					</ModalBody>

					<ModalFooter>
						<Button variant='main' mr={3} onClick={onClose}>
							Close
						</Button>
						<Button
							variant='main'
							type='submit'
							isLoading={false}
							loadingText='Creating ...'
							spinnerPlacement='start'
							spinner={<Spinner />}>
							Create
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	)
}

export default CreateDeviceModal
