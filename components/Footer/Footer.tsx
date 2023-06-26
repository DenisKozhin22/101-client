'use client'
import { FC } from 'react'
import { Box, Container, Text, Heading, Flex } from '@/chakraUI/chakra'
const Footer: FC = () => {
	return (
		<Box color='gray.50' mt='auto'>
			<Box bg='blackAlpha.100'>
				<Container maxW='container.xl'>
					<Flex gap='4' color='gray.600' p='4'>
						<Text fontSize='xs' mb='2'>
							Store 101 is an official partner of Apple in Russia and Europe, with the status
							premium Reseller Apple Premium Reseller.
						</Text>
						<Text fontSize='xs'>
							Store 101 is not just a store, but also a service center, a place where you can come
							to consult, choose a suitable device, where you will be taught use it, give tips on
							operation and show the possibilities that you purchased.
						</Text>
					</Flex>
				</Container>
			</Box>
			<Box bg='blackAlpha.800' p='4'>
				<Container maxW='container.xl'>
					<Flex justifyContent='space-between'>
						<Heading as='h3' size='sm'>
							© Store 101, 2023
						</Heading>
						<Text fontSize='xs'>
							The largest chain of Apple hardware stores and service centers.
						</Text>
					</Flex>
				</Container>
			</Box>
		</Box>
	)
}

export default Footer
