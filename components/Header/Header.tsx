import { FC } from 'react'
import { Container, Flex } from '@chakra-ui/react'
import AuthModal from '../Modals/AuthModal/AuthModal'

import UserMenu from './UserMenu/UserMenu'
import { useAppSelector } from '@/hooks/useAppSelector'
import Logo from './Logo/Logo'

const Header: FC = () => {
	const user = useAppSelector(state => state.user)
	return (
		<Flex bg='blackAlpha.800' py='2' h='50px' alignItems='center'>
			<Container maxW='container.xl'>
				<Flex justifyContent='space-between' alignItems='center'>
					<Logo />
					{user.user?._id ? <UserMenu /> : <AuthModal />}
				</Flex>
			</Container>
		</Flex>
	)
}

export default Header
