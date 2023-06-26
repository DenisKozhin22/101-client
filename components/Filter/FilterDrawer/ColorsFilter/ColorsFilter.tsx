'use client'

import { useFilters } from '@/hooks/filter/useFilters'
import { useTypedSelector } from '@/types/useTypedSelector'
import { Checkbox, Flex } from '@chakra-ui/react'
import { FC } from 'react'
import { updateArrayQuery } from '../SeriesFilter/updateArrayQuery'

const ColorsFilter: FC = () => {
	const { updateQueryParams, queryParams } = useFilters()
	const filterState = useTypedSelector(state => state.filters)
	
	const checkboxesColors = filterState.parameters.colors
	return (
		<Flex flexDirection='column'>
			{checkboxesColors?.map(item => (
				<Checkbox
					key={item}
					isChecked={filterState.queryParams.colors?.split('-').includes(item)}
					onChange={() =>
						updateQueryParams('colors', updateArrayQuery(queryParams.colors as string, item))
					}
					size='md'
					colorScheme='telegram'>
					{item}
				</Checkbox>
			))}
		</Flex>
	)
}

export default ColorsFilter
