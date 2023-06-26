import { useGetUser } from '@/hooks/auth/useGetUser'
import { useLogin } from '@/hooks/auth/useLogin'
import { ILoginProps } from '@/services/Auth/auth.types'
import {
	FormControl,
	FormLabel,
	Input,
	FormErrorMessage,
	Box,
	Button,
	Spinner,
} from '@chakra-ui/react'
import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

const LoginForm: FC = () => {
	const { refetch: refetchUserData } = useGetUser()
	const { mutateAsync: login, isLoading } = useLogin()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ILoginProps>({
		mode: 'onSubmit',
	})

	const onSubmit: SubmitHandler<ILoginProps> = async data => {
		try {
			await login(data)
			await refetchUserData()
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<Box as='form' onSubmit={handleSubmit(onSubmit)}>
			<FormControl isInvalid={Boolean(errors.email?.message)}>
				<FormLabel>Email</FormLabel>
				<Input
					type='email'
					variant='main'
					{...register('email', { required: 'Enter your email!' })}
				/>
				<FormErrorMessage my='2'>{errors.email?.message}</FormErrorMessage>
			</FormControl>
			<FormControl isInvalid={Boolean(errors.password?.message)}>
				<FormLabel>Password</FormLabel>
				<Input
					type='password'
					variant='main'
					{...register('password', { required: 'Enter your password!' })}
				/>
				<FormErrorMessage my='2'>{errors.password?.message}</FormErrorMessage>
			</FormControl>
			<Button
				variant='main'
				type='submit'
				w='full'
				mx='auto'
				my='2'
				isLoading={isLoading}
				loadingText='Signing in...'
				spinnerPlacement='start'
				spinner={<Spinner />}>
				Login
			</Button>
		</Box>
	)
}

export default LoginForm
