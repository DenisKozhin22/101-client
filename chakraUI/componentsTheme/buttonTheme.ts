import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const main = defineStyle({
	display: 'flex',
	alignItems: 'center',
	textAlign: 'center',
	bg: 'blackAlpha.800 !important',
	color: 'gray.50',
	fontWeight: '500',
	transition: 'ease-in-out 0.3s',
	_hover: {
		bg: 'blackAlpha.700 !important',
	},
	_active: {
		bg: 'blackAlpha.700 !important',
	},
	_disabled: {
		opacity: '0.9',
	},
})
const ghost = defineStyle({
	bg: 'transparent',
	color: 'gray.50',
	fontWeight: '500',
	_hover: {
		bg: 'blackAlpha.700',
	},
	_active: {
		bg: 'blackAlpha.500',
	},
})

const primary = defineStyle({
	_hover: {
		bg: 'blackAlpha.200',
	},
})

export const buttonTheme = defineStyleConfig({
	variants: { main, ghost, primary },
})
