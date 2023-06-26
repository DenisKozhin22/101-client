'ise client'
import { useFilters } from '@/hooks/filter/useFilters'
import { useTypedSelector } from '@/types/useTypedSelector'
import { Checkbox, Flex } from '@chakra-ui/react'
import { FC } from 'react'
import { updateArrayQuery } from './updateArrayQuery'

const SeriesFilter: FC = () => {
	const { updateQueryParams, queryParams } = useFilters()
	const filterState = useTypedSelector(state => state.filters)
	const checkboxesSeries = filterState.parameters.series
	const onChangeSeries = (value: string) => {
		updateQueryParams('colors', '')
		updateQueryParams('series', updateArrayQuery(queryParams.series as string, value))
	}
	return (
		<Flex flexDirection='column'>
			{checkboxesSeries?.map(item => (
				<Checkbox
					key={item._id}
					isChecked={filterState.queryParams.series?.split('-').includes(item.name)}
					onChange={() => onChangeSeries(item.name)}
					size='md'
					colorScheme='telegram'>
					{item.name}
				</Checkbox>
			))}
		</Flex>
	)
}

export default SeriesFilter
