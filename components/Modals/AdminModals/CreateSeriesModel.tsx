'use client'

import { useCreateSeries } from '@/hooks/device/useCreateSeries'
import { useGetTypeDevice } from '@/hooks/device/useGetTypeDevice'
import { ISeriesProps } from '@/services/Admin/admin.types'
import {
	Box,
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
	Select,
	Spinner,
	useDisclosure,
} from '@chakra-ui/react'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

const CreateSeriesModel: FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { data } = useGetTypeDevice()
	const { mutateAsync: createSeries, isLoading } = useCreateSeries()
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ISeriesProps>({
		mode: 'onSubmit',
	})

	const onSubmit: SubmitHandler<ISeriesProps> = async data => {
		try {
			await createSeries(data)
				.then(res => res.status === 200 && onClose())
				.finally(() => reset())
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<>
			<Button onClick={onOpen} variant='main'>
				Create series
			</Button>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent as='form' onSubmit={handleSubmit(onSubmit)}>
					<ModalHeader>Create series</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<FormControl>
							<FormLabel>Type</FormLabel>
							<Select {...register('type', { required: 'Select type!' })} placeholder='Select type'>
								{data?.data.map(item => (
									<option key={item._id} value={item._id}>
										{item.name}
									</option>
								))}
							</Select>
						</FormControl>
						<FormControl>
							<FormLabel>Series name</FormLabel>
							<Input
								{...register('name', { required: 'Enter series name!' })}
								placeholder='Series name'
							/>
						</FormControl>
					</ModalBody>

					<ModalFooter>
						<Button variant='main' mr={3} onClick={onClose}>
							Close
						</Button>
						<Button
							variant='main'
							type='submit'
							isLoading={isLoading}
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

export default CreateSeriesModel
