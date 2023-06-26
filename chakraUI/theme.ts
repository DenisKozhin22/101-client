import { extendTheme } from '@chakra-ui/react'
import { buttonTheme } from './componentsTheme/buttonTheme'
import { inputTheme } from './componentsTheme/inpuTheme'

export const theme = extendTheme({
	components: { Button: buttonTheme, Input: inputTheme },
})
