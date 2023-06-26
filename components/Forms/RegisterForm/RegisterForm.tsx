import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import {
	FormControl,
	FormLabel,
	Input,
	FormErrorMessage,
	Box,
	Button,
	Spinner,
} from '@chakra-ui/react'
import { IRegisterProps } from '@/services/Auth/auth.types'
import { useRegister } from '@/hooks/auth/useRegister'

const RegisterForm: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IRegisterProps>({
		mode: 'onSubmit',
	})

	const { mutateAsync: registration, isLoading } = useRegister()

	const onSubmit: SubmitHandler<IRegisterProps> = async data => {
		registration(data)
	}
	return (
		<Box as='form' onSubmit={handleSubmit(onSubmit)}>
			<FormControl>
				<FormLabel>User Name</FormLabel>
				<Input type='text' variant='main' {...register('userName', { required: true })} />
				<FormErrorMessage>{errors.userName?.message}</FormErrorMessage>
				<FormLabel>Email</FormLabel>
				<Input type='email' variant='main' {...register('email', { required: true })} />
				<FormErrorMessage>{errors.email?.message}</FormErrorMessage>
				<FormLabel>Password</FormLabel>
				<Input type='password' variant='main' {...register('password', { required: true })} />
				<FormErrorMessage>{errors.password?.message}</FormErrorMessage>
			</FormControl>

			<Button
				variant='main'
				type='submit'
				mx='auto'
				my='2'
				w='full'
				isLoading={false}
				loadingText='Registration...'
				spinnerPlacement='start'
				spinner={<Spinner />}>
				Register
			</Button>
		</Box>
	)
}

export default RegisterForm
