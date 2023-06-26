import { defineStyleConfig, defineStyle } from '@chakra-ui/react'

const main = defineStyle({
	field: {
		bg: 'blackAlpha.50',
		color: 'blackAlpha.700',
		border: '2px solid transparent',
		_focusVisible: {
			borderColor: 'blackAlpha.700',
		},
	},
})

export const inputTheme = defineStyleConfig({
	variants: { main },
})
