import { FC, useRef } from 'react'
import {
	Accordion,
	AccordionItem,
	Box,
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	useDisclosure,
	AccordionButton,
	AccordionIcon,
	AccordionPanel,
} from '@chakra-ui/react'
import { AiFillFilter } from 'react-icons/ai'
import SeriesFilter from './SeriesFilter/SeriesFilter'
import ColorsFilter from './ColorsFilter/ColorsFilter'

const FilterDrawer: FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const btnRef = useRef<HTMLButtonElement>(null)

	return (
		<>
			<Button
				ref={btnRef}
				variant='main'
				onClick={onOpen}
				leftIcon={<AiFillFilter color='#F7FAFC' />}>
				Filter
			</Button>
			<button></button>
			<Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Filters</DrawerHeader>

					<DrawerBody>
						<Accordion  allowMultiple>
							<AccordionItem>
								<h2>
									<AccordionButton>
										<Box as='span' flex='1' textAlign='left'>
											Series
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4}>
									<SeriesFilter />
								</AccordionPanel>
							</AccordionItem>

							<AccordionItem>
								<h2>
									<AccordionButton>
										<Box as='span' flex='1' textAlign='left'>
											Colors
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4}>
									<ColorsFilter />
								</AccordionPanel>
							</AccordionItem>
						</Accordion>
					</DrawerBody>

					<DrawerFooter>
						<Button variant='main' w='full' mr={3} onClick={onClose}>
							Cancel
						</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	)
}

export default FilterDrawer
