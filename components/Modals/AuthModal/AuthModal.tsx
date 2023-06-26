'use client'
import LoginForm from '@/components/Forms/LoginForm/LoginForm'
import RegisterForm from '@/components/Forms/RegisterForm/RegisterForm'
import { useTypedSelector } from '@/types/useTypedSelector'
import {
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Tab,
	TabIndicator,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	useDisclosure,
} from '@chakra-ui/react'
import { FC } from 'react'

const AuthModal: FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { user } = useTypedSelector(state => state.user)

	user && onClose()
	return (
		<>
			<Button onClick={onOpen} variant='ghost'>
				Login
			</Button>

			<Modal onClose={onClose} isOpen={isOpen} isCentered>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Authorization</ModalHeader>
					<ModalCloseButton />
					<ModalBody py='none'>
						<Tabs position='relative' variant='unstyled'>
							<TabList>
								<Tab flex='1'>Login</Tab>
								<Tab flex='1'>Registration</Tab>
							</TabList>
							<TabIndicator mt='-1.5px' height='3px' bg='blackAlpha.800' borderRadius='1px' />
							<TabPanels>
								<TabPanel py='4' px='0'>
									<LoginForm />
								</TabPanel>
								<TabPanel py='4' px='0'>
									<RegisterForm />
								</TabPanel>
							</TabPanels>
						</Tabs>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	)
}

export default AuthModal
